import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams } from "react-router-dom";

export const TaskForm = () => {
  const { createTask, getTask } = useTasks();
  const [task, setTask] = useState({ title: "", description: "" });
  const params = useParams();

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
    <div>
      <h1>{!params.id ? "Create New Task" : "Edit Task"}</h1>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          createTask(values);
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />
            <label>description</label>
            <textarea
              name="description"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
