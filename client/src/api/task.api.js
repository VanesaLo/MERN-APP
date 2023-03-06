import axios from "axios";

const apiURL = "http://localhost:4000/tasks";

export const getTaskRequest = async () => await axios.get(apiURL);

export const getTaskByIdRequest = async (id) =>
  await axios.get(`${apiURL}/${id}`);

export const createTaskRequest = async (task) => await axios.post(apiURL, task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`${apiURL}/${id}`);
