import TaskColumn from "./TaskColumn";

function App() {
  const tasks = [
    { id: 1, title: "Walk the dog", status: "pending" },
    { id: 2, title: "Drink some beer", status: "pending" },
    { id: 3, title: "Go to the gym", status: "pending" },
    { id: 4, title: "Learn React", status: "doing" },
    { id: 5, title: "Wash the dishes", status: "done" },
  ];

  const pendingTasks = tasks.filter((task) => task.status === "pending");
  const doingTasks = tasks.filter((task) => task.status === "doing");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-4xl mt-5 mb-3">My Todo List</h1>
      <p>
        This is my todo list, may it always be empty except when learning to
        code.
      </p>

      <div className="bg-white p-3 my-5 border rounded">

        <div className="flex justify-between">

          <TaskColumn tasks={pendingTasks} label="Pending" color="neutral" />
          <TaskColumn tasks={doingTasks} label="Doing" color="red" />
          <TaskColumn tasks={doneTasks} label="Done" color="emerald" />

			</div>
      </div>
    </div>
  );
}

export default App;
