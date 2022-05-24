const arrayDb = require("../db/fakeUsers.db");
const { request, response } = require("express");

// endpoint to get all the users
exports.getAllUsers = (req, res) => {
    console.log("geting all users.......");
    res.json({
        msg: "get all users",
        users: arrayDb.users,
    });
};

// endpoint to get user by languaje
exports.getUserByLanguage = (req = request, res = response) => {
    const { language } = req.body;
    console.log("geting user by language.......");
    if (!language) {
        res.status(400).json({
            error: "The language is required",
        });
    }
    const user = arrayDb.users.find((user) => user.skills.languaje === language);
    if (!user) {
        res.status(404).json({
            error: "The user not found",
        });
    }
    res.json(user);
};

//upodate user by name
exports.updateUser = (req = request, res = response) => {
    const { id } = req.body;
    console.log("updating user.......");
    if (!id) {
        res.status(400).json({
            error: "The id is required",
        });
    }
    const user = arrayDb.users.find((user) => user.id === id);
    if (!user) {
        res.status(404).json({
            error: "The user not found",
        });
    } else {
        const { name, email, languaje, skills } = req.body;
        user.name = name;
        user.email = email;
        user.languaje = languaje;
        user.skills = skills;
        res.json(user);
    }
};

//create user
exports.createUser = (req = request, res = response) => {
    const { name, languaje, skills } = req.body;
    console.log("creating user.......");
    if (!name || !languaje || !skills) {
        res.status(400).json({
            error: "The name, email, languaje and skills are required",
        });
    }
    const user = {
        id: arrayDb.users.length + 1,
        name,
        languaje,
        skills,
    };
    arrayDb.users.push(user);
    res.json(user);
};

// endpoint to delete user
exports.deleteUser = (req = request, res = response) => {
    const { id } = req.body;
    console.log("deleting user.......");
    if (!id) {
        res.status(400).json({
            error: "The id is required",
        });
    }
    const user = arrayDb.users.find((user) => user.id === id);
    if (!user) {
        res.status(404).json({
            error: "The user not found",
        });
    } else {
        const index = arrayDb.users.indexOf(user);
        arrayDb.users.splice(index, 1);
        res.json({
            msg: "The user was deleted",
        });
    }
};
