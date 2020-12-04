const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    userName: String,
    userAvatar: String,
    content: {
        type: String,
        required: true
    },
    likes: []

}, {
    timestamps: true
})

const threadSchema = new Schema({
    topic: {
        type: String,
        enum: ['General', 'Engine', 'ForcedInduction', 'WheelsTires', 'Suspension', 'Cosmetic'],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    views: {
        type: Number
    },
    posts: [postsSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Thread', threadSchema);