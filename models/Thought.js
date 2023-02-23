const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction.js")


const thoughtSchema = new Schema(
    {
        thoughtText: {type: String, required: true, min: 1, max: 280 },
        //TODO Use a getter method to format the timestamp on query
        createdAt: {type: Date, default: Date.now },
        username: {type: String, required: true},
        // TODO Array of nested documents created with the reactionSchema
        reaction: [reactionSchema]

    }

)

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reaction.length;
})


const Thought = model('Thought', thoughtSchema);

module.exports = Thought;