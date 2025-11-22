const Task = require("../models/Task");

exports.createTask = async (req,res)=>{
    try{
        const {name,streak} = req.body;
        const task = new Task({name,streak});
        await task.save();
        res.status(201).json(task);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}



exports.getTasks = async (req,res)=>{
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}


exports.updateTask = async (req,res)=>{
    try{
        const {id} = req.params;
        const oldTask = await Task.findById(id);
        if(!oldTask){
            return res.status(404).json({message:"Task not found"});
        }
        let streak = oldTask.streak+1;
        const task = await Task.findByIdAndUpdate(id,{streak:streak,lastCompleted:Date.now()});
        res.status(200).json(task);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

exports.deleteTask = async (req,res)=>{
    try{
        const {id} = req.params;
        await Task.findByIdAndDelete(id);
        res.status(200).json({message:"Task deleted successfully"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
