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

router.get("/api/children/:id", childrenActions.browse);
router.post("/api/children", childrenActions.add);
router.delete("/api/children/:id", childrenActions.destroy);
// router.put("/api/children/:id", childrenActions.edit);

/* ************************************************************************* */

// get userApp  from database

import parentActions from "./modules/parent/parentActions";

import authentificationActions from "./modules/authentification/authentificationActions";
import bookingActions from "./modules/booking/bookingActions";
import userActions from "./modules/user/userActions";
import validate, { parentFolderValidator } from "./service/validate";

// Booking routes
router.get("/api/booking", bookingActions.browse);
router.get("/api/booking/parent", bookingActions.read);
router.post("/api/booking", bookingActions.add);

// User routes
router.get("/api/parent", parentActions.browse);
router.post(
  "/api/parent",
  parentFolderValidator,
  validate.validate,
  parentActions.add,
);
router.get("/api/user", userActions.browse);

router.post(
  "/api/user/registration",
  userActions.validation,
  authentificationActions.hashPassword,
  userActions.add,
);

router.post("/api/user/login", authentificationActions.login);
router.get("/api/user/me", authentificationActions.getUser);

/* Authentication wall */

router.use(authentificationActions.verifyToken);

router.delete("/api/parent/:id", parentActions.destroy);

export default router;
