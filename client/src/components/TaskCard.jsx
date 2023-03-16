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
    <div className="cards rounded-md p-6">
      <header className="flex justify-between">
        <h2 className="titleTask tsxt-sm font-bold rounded-md p-2">
          {task.title}
        </h2>
        <span className="doneItem">{!task.done ? "	❌" : "✅"}</span>
      </header>
      <p className="descrptionTask">{task.description}</p>

      <div className=" flex gap-2">
        <button
          className="btn rounded-md p-2"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="btn rounded-md p-2"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="btn rounded-md p-2"
          onClick={() => handleDone(task.done)}
        >
          Toggle
        </button>
      </div>
      {/* <span>Create: {task.createdAt}</span> */}
    </div>
  );
};
