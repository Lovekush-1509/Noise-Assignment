require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const databaseConnect = require('./database/database');
const app = express();
app.use(express.json());
const parser = require('body-parser');
app.use(parser.json());
const taskRoutes = require('./routes/route');

// MongoDB Connection
databaseConnect();

// routes
app.use("/habits",taskRoutes);


// Server setup
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Hello Luna, Server is running on port ${PORT}`);
});

app.get('/',(req,res)=>{
    res.send("Hello Luna");
})


// http://localhost:4000/habits/create
// http://localhost:4000/habits/get
// http://localhost:4000/habits/:id/complete
// http://localhost:4000/habits/:id/delete

