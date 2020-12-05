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
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}]

}, {
    timestamps: true
})

const threadSchema = new Schema({
    topic: {
        type: String,
        enum: ['general', 'engine', 'forcedInduction', 'wheelsTires', 'suspension', 'cosmetic'],
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
        type: Number,
        default: 0
    },
    posts: [postsSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Thread', threadSchema);