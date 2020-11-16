const router = require("express").Router();
const db = require("../models/")

//Get the previous workouts
router.get("/api/wourkouts", (req, res) => {
    db.workout.find({})
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});