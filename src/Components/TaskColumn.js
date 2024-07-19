function TaskColumn({ label, color, tasks }) {
  return (
    <div className="w-1/3">
      <div className={`bg-${color}-100 mx-2 p-3 border rounded`}>
        <h2 className={`font-medium text-xl border-b border-${color}-500 pb-1 mb-2`}>
          {label}
        </h2>
        <div className="p2">
          {tasks.length ?
          tasks.map((task) => <div key={task.id} className="p-2 mb-1 bg-white border">{task.title}</div>) : 'no tasks'}
        </div>
      </div>
    </div>
  );
}

export default TaskColumn;
