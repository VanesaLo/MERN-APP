import { Route, Routes } from "react-router-dom";
import { TaskForm } from "./pages/TaskForm";
import NotFound from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { TasksPages } from "./pages/TasksPages";
import { TaskProvider } from "./context/TaskContext";
import "./components/styles.css";

const App = () => {
  return (
    <div className="containerApp h-screen">
      <Navbar />
      <div className="flex justify-center px-4 py-4">
        <TaskProvider>
          <Routes>
            <Route path="/" element={<TasksPages />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskProvider>
      </div>
    </div>
  );
};

export default App;
