const express = require("express")
const router = express.Router()

const MessageModel = require("./Model/Message")

router.post("/create", async (req, res, next) => {
    try {
        // Message gets created in MongoDB with information added by admin
        const createdMessage = await MessageModel.create(req.body);
        res.status(201).json(createdMessage);
    } catch (err) {
        res.status(500).json(err);
        next(err);
    }
});

router.get("/all", async (req, res, next) => {
    try {
        // GET all messages from MongoDB
        const allMessages = await MessageModel.find();
        res.status(200).json(allMessages);
    } catch (err) {
        res.status(500).json(err);
        next(err);
    }
});

router.patch(
    "/:id/edit",
    async (req, res, next) => {
        try {
            // Message gets updated in MongoDB with information changed by admin
            const updatedMessage = await MessageModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            res.status(200).json(updatedMessage);
        } catch (err) {
            res.status(500).json(err);
            next(err);
        }
    }
);

router.get("/:pagename/message", async (req, res, next) => {
    try {
        // GET one message from MongoDB
        const message = await MessageModel.findOne({ location: req.params.pagename });
        res.status(200).json(message);
    } catch (err) {
        res.status(500).json(err);
        next(err);
    }
});

module.exports = router;