import { Route, Routes } from "react-router-dom";
import { TaskForm } from "./pages/TaskForm";
import NotFound from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { TasksPages } from "./pages/TasksPages";
import { TaskProvider } from "./context/TaskContext";

const App = () => {
  return (
    <div className="bg-sky-200 h-screen ">
      <Navbar />
      <div className="container px-4 py-4">
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
