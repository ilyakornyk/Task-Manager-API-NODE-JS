const express = require(`express`);
// тут реалізовується роутинг, тобто по якому рауту який контролер має виконуватися
const router = express.Router();
const { getAllTasks,
        createTask,
        getTask,
        updateTask,
        editTask,
        deleteTask} = require(`../contorllers/tasks`);

router.route(`/`).get(getAllTasks).post(createTask);
router.route(`/:id`).get(getTask).patch(updateTask).delete(deleteTask).put(editTask);

module.exports = router; 


