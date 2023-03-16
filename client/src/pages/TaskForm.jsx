import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import "../components/styles.css";

export const TaskForm = () => {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({ title: "", description: "" });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getTaskByID = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    getTaskByID();
  }, []);

  return (
    <div className="containerForm rounded-md">
      <h1 className="titleForm">
        {!params.id ? "Create New Task" : "Edit Task"}
      </h1>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          navigate("/");
          setTask({ title: "", description: "" });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className=" max-w-sm form">
            <label className="block text-lg">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
              className="mb-4 rounded-sm p-2"
            />
            <label className="block text-lg">Description</label>
            <textarea
              name="description"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
              className="mb-2 rounded-sm p-2"
            ></textarea>
            <button
              className="block btn rounded-md p-2"
              type="submit"
              disabled={isSubmitting}
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
