const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {type: Schema.Types.ObjectId },
        reactionBody: {type: String, required: true, max: 280},
        username: {type: String, required: true},
        // TODO Use a getter method to format the timestamp on query
        createdAt: {type: Date, default: Date.now, },
    }
)

// const Reaction = model('Reaction', reactionSchema);

module.exports = reactionSchema;