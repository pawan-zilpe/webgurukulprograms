const express = require("express");
const {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUserById);
router.put("/:id", updateUserById);

module.exports = router;
