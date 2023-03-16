import React, { useEffect } from "react";
import { TaskCard } from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

export const TasksPages = () => {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <header className="font-bold text-center text-2xl m-6">List Tasks</header>
      <div className="grid grid-cols-3 gap-4">
        {tasks.length === 0 ? (
          <h1>Not tasks yet</h1>
        ) : (
          tasks.map((task) => <TaskCard task={task} key={task.id} />)
        )}
      </div>
    </div>
  );
};
