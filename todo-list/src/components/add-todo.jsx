import { useEffect, useState } from "react";
import { useTodo } from "../stores/useTodo";

const nullTask = {
  title: "",
  description: "",
};

function AddTodo() {
  const { tasks = [], addTodo, updateTodo, idTask, setIdTask } = useTodo((state) => state);

  const [task, setTask] = useState(nullTask);

  useEffect(() => {
    if (idTask === null) {
      setTask(nullTask);
      return;
    }

    const thisTask = tasks.find((t) => t.id === idTask);
    console.log("thisTask", thisTask);

    if (thisTask) {
      setTask({
        title: thisTask.title ?? "",
        description: thisTask.description ?? "",
      });
    }
  }, [idTask, tasks]);

  const handleSubmit = () => {
    const title = task.title.trim();
    const description = task.description.trim();

    if (!title) return;

    if (idTask !== null) {
      updateTodo(idTask, { title, description });
    } else {
      addTodo({
        id: crypto.randomUUID(),
        title,
        description,
        completed: false,
      });
    }

    setTask(nullTask);
    setIdTask(null);
  };

  return (
    <div
      className="flex w-full gap-4 mb-4 shrink-0"
    >
      <input
        className="border border-gray-300 w-full p-2 rounded-full"
        type="text"
        placeholder="Task title"
        value={task.title}
        onChange={(e) =>
          setTask((prev) => ({ ...prev, title: e.target.value }))
        }
      />

      <input
        className="border border-gray-300 w-full p-2 rounded-full"
        type="text"
        placeholder="Description"
        value={task.description}
        onChange={(e) =>
          setTask((prev) => ({ ...prev, description: e.target.value }))
        }
      />

      <button
        type="submit"
        className="bg-green-700 px-6 py-2 rounded-full text-white hover:bg-green-500"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;