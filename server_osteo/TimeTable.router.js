const express = require("express")
const router = express.Router()

const TimeTableModel = require("./Model/TimeTable")

router.post("/create", async (req, res, next) => {
    try {
        // TimeTable gets created in MongoDB with information added by admin
        const createdTimeTable = await TimeTableModel.create(req.body);
        res.status(201).json(createdTimeTable);
    } catch (err) {
        res.status(500).json(err);
        next(err);
    }
});

router.get("/all", async (req, res, next) => {
    try {
        // GET all TimeTable from MongoDB
        const allTimes = await TimeTableModel.find();
        res.status(200).json(allTimes);
    } catch (err) {
        res.status(500).json(err);
        next(err);
    }
});

router.patch(
    "/:id/edit",
    async (req, res, next) => {
        try {
            // TimeTable gets updated in MongoDB with information changed by admin
            const updatedTimeTable = await TimeTableModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            res.status(200).json(updatedTimeTable);
        } catch (err) {
            res.status(500).json(err);
            next(err);
        }
    }
);

router.delete("/:id/delete", async (req, res, next) => {
    try {
        await TimeTableModel.findByIdAndDelete(req.params.id);
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
})

module.exports = router;