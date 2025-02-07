import databaseClient, {
  type Result,
  type Rows,
} from "../../../database/client";
import type { Parent } from "../../types/modules/Parent";

class ParentRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM parent");

    return rows;
  }

  async readParentId(mail: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT id FROM parent WHERE p_mail = ?",
      [mail],
    );

    return rows[0];
  }

  async readEmailWithPassword(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from parent where email = ?",
      [email],
    );

    return rows[0] as Parent;
  }

  async getParentByUserId(id: number) {
    const [rows] = await databaseClient.query<Rows>("SELECT id FROM parent", [
      id,
    ]);

    return rows[0] as Parent;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from parent where id = ?",
      [id],
    );

    return result.affectedRows;
  }

  async create(parent: Parent) {
    const {
      firstName,
      lastName,
      job,
      adress,
      zipCode,
      numTel,
      mail,
      birthDate,
    } = parent;
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO parent (p_first_name, p_last_name, p_job, p_address, p_zip_code, p_num_tel, p_mail, p_birth_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [firstName, lastName, job, adress, zipCode, numTel, mail, birthDate],
    );
    return result.insertId;
  }

  async update(parent: Parent) {
    const [row] = await databaseClient.query<Result>(
      "UPDATE parent SET p_first_name = ?, p_last_name = ?, p_job = ?, p_address = ?, p_zip_code = ?, p_num_tel = ?, p_mail = ?, p_birth_date = ? WHERE id = ?",
      [
        parent.firstName,
        parent.lastName,
        parent.job,
        parent.adress,
        parent.zipCode,
        parent.numTel,
        parent.mail,
        parent.birthDate,
        parent.id,
      ],
    );

    return row.affectedRows;
  }
}

export default new ParentRepository();
