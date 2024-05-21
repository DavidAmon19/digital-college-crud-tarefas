const axios = require('axios');

const BASE_URL = 'http://localhost:5000/tasks';

class TaskRepository {
  async createTask(taskData) {
    const response = await axios.post(BASE_URL, taskData);
    return response.data;
  }

  async getTasks(userId) {
    const response = await axios.get(`${BASE_URL}?userId=${userId}`);
    return response.data;
  }

  async getTaskById(id) {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  }

  async updateTask(id, taskData) {
    const response = await axios.put(`${BASE_URL}/${id}`, taskData);
    return response.data;
  }

  async deleteTask(id) {
    await axios.delete(`${BASE_URL}/${id}`);
  }
}

module.exports = new TaskRepository();
