import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const Navbar = () => {
  return (
    <nav className=" navbar flex justify-between px-10 py-6">
      <h1 className="text-xl font-bold">My To-Do App</h1>
      <ul className="flex gap-6">
        <li className="itemsNav">
          <Link to="/">Home</Link>
        </li>
        <li className="itemsNav">
          <Link to="/create-task">Create</Link>
        </li>
      </ul>
    </nav>
  );
};
