const express = require("express");
const router = express.Router();

const {createTask,getTasks,updateTask,deleteTask} = require("../controllers/taskManager");

router.post("/create",createTask);
router.get("/get",getTasks);
router.patch("/:id/complete",updateTask);
router.delete("/:id/delete",deleteTask);

module.exports = router;