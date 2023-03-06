import React, { useEffect } from "react";
import { getTaskRequest } from "../api/task.api";
import { TaskCard } from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

export const TasksPages = () => {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <h1>List Tasks</h1>
      {tasks.length === 0 ? (
        <h1>Not tasks yet</h1>
      ) : (
        tasks.map((task) => <TaskCard task={task} key={task.id} />)
      )}
    </div>
  );
};
