const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//allows usage of dotenv files
require('dotenv').config();

//express server
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//mongoose setup to mongoDB server
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () =>{
	console.log("MongoDB database connection established successfully")
});

//routes
const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', userRouter);


//starts the server
app.listen(port, ()=> {
	console.log(`server is running on port: ${port}`);
});
