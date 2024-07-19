function NewTaskForm() {
  return (
    <div className="my-5">
      <form className="relative">
        <input
          type="text"
          className="w-full p-2 border"
          placeholder="Add new task.."
        />
        <input
          type="submit"
          value="Create"
          className="bg-blue-200 py-1 px-2 rounded border border-blue-500 absolute right-2 top-1/2 -translate-y-1/2"
        />
      </form>
    </div>
  );
}

export default NewTaskForm;
