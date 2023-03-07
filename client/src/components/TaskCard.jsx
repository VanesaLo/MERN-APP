import React from "react";
import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

export const TaskCard = ({ task }) => {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-red-200 rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="tsxt-sm font-bold">{task.title}</h2>
        <span>{!task.done ? "	❌" : "✅"}</span>
      </header>
      <p>{task.description}</p>
      <span>{task.createdAt}</span>

      <div className=" flex gap-2">
        <button
          className="bg-slate-400 rounded-sm p-2"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-slate-400 rounded-sm p-2"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-slate-400 rounded-sm p-2"
          onClick={() => handleDone(task.done)}
        >
          Toggle
        </button>
      </div>
    </div>
  );
};
