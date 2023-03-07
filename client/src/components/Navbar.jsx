import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-red-200 flex justify-between px-10 py-4">
      <h1 className="text-xl font-bold">My To-Do App</h1>
      <ul className="flex gap-6">
        <li className=" rounded-md border-cyan-300">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-task">Create</Link>
        </li>
      </ul>
    </div>
  );
};
