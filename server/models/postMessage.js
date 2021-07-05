import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: false
    },
    creator: {
        type: String,
        required: false
    },
    tags: {
        type: [String],
    },
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    selectedFile: String,
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;