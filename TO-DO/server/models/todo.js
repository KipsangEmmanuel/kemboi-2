const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: {
        type: "string",
        require: true,
    },
    description: {
        type: "string",
    },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;