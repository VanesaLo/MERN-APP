import { createContext, useContext, useState } from "react";
import {
  getTaskRequest,
  deleteTaskRequest,
  createTaskRequest,
  getTaskByIdRequest,
  updateTaskRequest,
  toggleTaskRequest,
} from "../api/task.api";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function getTasks() {
    const response = await getTaskRequest();
    setTasks(response.data);
    console.log(response);
  }

  const getTask = async (id) => {
    try {
      const res = await getTaskByIdRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task);
      setTasks([tasks, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id, newTask) => {
    try {
      const res = await updateTaskRequest(id, newTask);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTaskDone = async (id) => {
    try {
      const task = tasks.find((task) => task.id === id);
      await toggleTaskRequest(id, task.done === 0 ? true : false);
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, done: !task.done } : task
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTasks,
        getTask,
        createTask,
        deleteTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
