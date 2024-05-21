const express = require('express');
const TaskController = require('../controllers/TaskController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, TaskController.createTask);
router.get('/', authMiddleware, TaskController.getTasks);
router.put('/:id', authMiddleware, TaskController.updateTask);
router.delete('/:id', authMiddleware, TaskController.deleteTask);

module.exports = router;
