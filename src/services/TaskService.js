const TaskRepository = require('../repositories/TaskRepository');

class TaskService {
  async createTask(user, taskData) {
    taskData.userId = user.id;
    return TaskRepository.createTask(taskData);
  }

  async getTasks(user) {
    return TaskRepository.getTasks(user.id);
  }

  async updateTask(user, id, taskData) {
    const task = await TaskRepository.getTaskById(id);
    if (task.userId !== user.id && user.role !== 'admin') {
      throw new Error('Not authorized');
    }
    return TaskRepository.updateTask(id, taskData);
  }

  async deleteTask(user, id) {
    const task = await TaskRepository.getTaskById(id);
    if (task.userId !== user.id && user.role !== 'admin') {
      throw new Error('Not authorized');
    }
    return TaskRepository.deleteTask(id);
  }
}

module.exports = new TaskService();
