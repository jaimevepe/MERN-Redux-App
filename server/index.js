import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/post.js';

const app = express();
app.use('/post', postRoutes);
// Body Parser has been depricated
// Parse incoming requests
app.use(express.json({ limit: "30mb", extended: true })); // limit = for sending images that might be large in size
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors)

const port = process.env.PORT || 3001;

const url = "mongodb://localhost:27017/tutorialredux?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(port, () => {
        console.log(`App running on port: ${port} AND BD Connected to ${url}`)
    })
})
.catch(error => {
    console.log("ERROR:", error.message)
})
// useFind is to make sure we dont get warnings in the console
mongoose.set('useFindAndModify', false)