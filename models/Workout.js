//const { workout } = require(".");

const mongoose = require("mongoose");

const { Schema } = mongoose;
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now,
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter your exercise type",
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter your exercise name",
                },
                duration: {
                    type: Number,
                    required: "Enter your exervise duratin in minutes",
                },
                weight: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                distance: {
                    type: Number,
                },
            }
        ]
    },
    {
        toJSON: {
            
            virtuals: true,
        },
    }
);

//add data to schema
workoutSchema.virtual("totalDuration").get(function(){
    //The exercises duration
    return this.exercises.reduce(
        (total, exercise) => total + exercise.duration, 0
    );
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;