import type { RequestHandler } from "express";

import parentRepository from "./parentRepository";
const browse: RequestHandler = async (req, res) => {
  const userApp = await parentRepository.readAll();

  res.json(userApp);
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const parent = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      job: req.body.job,
      adress: req.body.adress,
      zipCode: req.body.zipCode,
      numTel: req.body.numTel,
      mail: req.body.mail,
      birthDate: req.body.birthDate,
    };

    const insertId = await parentRepository.create(parent);
    if (insertId) {
      res.send(201).json({ insertId });
    } else {
      res.send("les champs insérés ne sont pas valides");
    }
  } catch (err) {
    const error = err as { code: string };
    if (error.code === "ER_DUP_ENTRY") {
      res.status(400).send("Cette adresse mail existe déjà");
    } else {
      res.status(400);
      next(err);
    }
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const parentId = Number(req.params.id);
    await parentRepository.delete(parentId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, destroy, add };
