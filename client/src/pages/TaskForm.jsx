import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";

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
    <div>
      <h1>{!params.id ? "Create New Task" : "Edit Task"}</h1>
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
          <Form onSubmit={handleSubmit} className=" max-w-sm">
            <label className="block">title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />
            <label className="block">description</label>
            <textarea
              name="description"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <button
              className="block bg-slate-400 rounded-sm p-2"
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
