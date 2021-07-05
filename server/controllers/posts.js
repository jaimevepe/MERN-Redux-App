import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find();

        res.status(200).json(postMessage)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    // Get the data from the Body
    const post = req.body;
    // Add new post to the DataBase
    const newPost = new PostMessage(post);

    try {
        await newpost.save()
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.massage });
    }
}