import { useEffect, useState } from "react";
import Header from "./Header";
import Task from "./Task";
import NewTaskForm from "./NewTaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksAPI =
      "https://gist.githubusercontent.com/AshIgnYeo/9191441413bb2942a20154e776ff077a/raw/a189d365316533eec65a7ee19e95f1b7ce044203/todos.json";
    fetch(tasksAPI)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div className="container mx-auto">
      <Header />
      <NewTaskForm setTasks={setTasks} />
      <Task task={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
