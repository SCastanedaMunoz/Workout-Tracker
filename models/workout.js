const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
        required: "Workout Date Must be Provided"
    },
    exercises: [{
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;