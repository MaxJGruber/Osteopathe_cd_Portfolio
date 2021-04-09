const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt");

const salt = 10;

const AdminModel = require("./Model/Admin");

router.post("/create", async (req, res, next) => {
    const { username, pincode } = req.body;
    try {
        const hashedPassword = bcrypt.hashSync(pincode, salt)
        const newAdmin = { username, pincode: hashedPassword }
        const createdUser = await AdminModel.create(newAdmin);
        res.status(201).json(createdUser)
    } catch (error) {
        res.status(500);
        next(error)
    }
})

router.post("/signin", async (req, res, next) => {
    const { username, pin } = req.body;
    try {
        const foundAdmin = await AdminModel.findOne({ username })
        const isValidPassword = bcrypt.compareSync(pin, foundAdmin.pincode)
        if (!foundAdmin || !isValidPassword) {
            return res.status(400).json({ message: "invalid credentials" });
        }
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
})

module.exports = router;