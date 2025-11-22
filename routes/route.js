const express = require("express");
const router = express.Router();

const {createTask,getTasks,updateTask,deleteTask,suggestTask} = require("../controllers/taskManager");

router.post("/create",createTask);
router.get("/get",getTasks);
router.patch("/:id/complete",updateTask);
router.delete("/:id/delete",deleteTask);
router.get("/suggest",suggestTask);

module.exports = router;