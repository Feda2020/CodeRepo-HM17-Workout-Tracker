const router = require("express").Router();
const db = require("../models/")

//Get the previous workouts
router.get("/api/wourkouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//Add the new workouts
routers.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//Update previous workouts
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.updateOne(
        {_id: req.params.id },
        {$push: { exercises: req.body } }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

//Get the most recent 5 workouts 
router.get("/api/wourkouts/range", (req, res) => {
    db.Workout.find({})
    .sort({ _id: -1 })
    .limit(5)
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
        console.log(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;