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
        enum: ['Generals', 'Engine', 'Forced Induction', 'Wheels/Tires', 'Suspension', 'Cosmetic'],
        required: true
    },
    title: {
        type: String
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

const topicSchema = new Schema({
    threads: [threadSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Topics', topicSchema);