import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
// import itemActions from "./modules/item/itemActions";

// router.get("/api/items", itemActions.browse);
// router.get("/api/items/:id", itemActions.read);
// router.post("/api/items", itemActions.add);

/* ************************************************************************* */

// get nursery  from database

import nurseryActions from "./modules/nursery/nurseryActions";

router.get("/api/nursery", nurseryActions.browse);
router.get("/api/nursery/:id", nurseryActions.read);

/* ************************************************************************* */

// get children from database

import childrenActions from "./modules/children/childrenActions";

router.get("/api/children", childrenActions.browse);
// router.post("/api/children", childrenActions.add);

/* ************************************************************************* */

// get userApp  from database

import parentActions from "./modules/parent/parentActions";

import authentificationActions from "./modules/authentification/authentificationActions";
import userActions from "./modules/user/userActions";

router.get("/api/parent", parentActions.browse);

// Parent registration

router.get("/api/user", userActions.browse);

router.post(
  "/api/user/registration",
  authentificationActions.hashPassword,
  userActions.add,
);
router.post("/api/user/login", authentificationActions.login);

export default router;
