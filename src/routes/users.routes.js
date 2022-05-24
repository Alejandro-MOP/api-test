const { Router } = require("express");
const router = Router();

const {
    getAllUsers,
    getUserByLanguage,
    updateUser,
    createUser,
    deleteUser,
} = require("../controllers/usersController");

// endpoint to get all the users
router.get("/getAllUsers", getAllUsers);

//endpoint to get user by languaje
router.post("/getUserByLanguage", getUserByLanguage);

//upodate user by name
router.put("/updateUser", updateUser);

//create user
router.post("/createUser", createUser);

//delete user
router.delete("/deleteUser", deleteUser);

module.exports = router;
