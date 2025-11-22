const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    
   name:{
     type:String,
     required:true,
   },
   streak:{
     type:Number,
     default:0,
   },

   lastCompleted:{
    type:Date
   },
    
});

module.exports = mongoose.model("Task",taskSchema);