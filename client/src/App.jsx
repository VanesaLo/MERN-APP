import { Route, Routes } from "react-router-dom";
import { TaskForm } from "./pages/TaskForm";
import NotFound from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { TasksPages } from "./pages/TasksPages";
import { TaskProvider } from "./context/TaskContext";

const App = () => {
  return (
    <TaskProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksPages />} />
        <Route path="/create-task" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TaskProvider>
  );
};

export default App;
