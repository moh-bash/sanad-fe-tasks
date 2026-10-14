import { useEffect, useState } from 'react';
import { useTodo } from '../stores/useTodo';

function AddTodo() {
    const {addTodo, idTask, tasks} = useTodo((state) => state);
    
    const [task, setTask] = useState({
        title: '',
        description: '',
    });

    const thisTask = tasks.find((t) => t.id === idTask);

    useEffect(() => {
        if (thisTask) {
            setTask({
                title: thisTask.title,
                description: thisTask.description,
            });
        }
    }, [thisTask]);

    const handleAddTodo = () => {
        if (!task.title.trim()) return;

        addTodo({
            id: crypto.randomUUID(),
            title: task.title.trim(),
            description: task.description.trim(),
            completed: false,
        });

        setTask({
            title: '',
            description: '',
        });
    };

    return (
        <div className="flex w-full gap-4 mb-4 shrink-0">
            <input
                className="border border-gray-300 w-full p-2 rounded-full"
                type="text"
                placeholder="Add a new task"
                value={task.title}
                onChange={(e) =>
                    setTask({ ...task, title: e.target.value })
                }
            />

            <input
                className="border border-gray-300 w-full p-2 rounded-full"
                type="text"
                placeholder="Description"
                value={task.description}
                onChange={(e) =>
                    setTask({ ...task, description: e.target.value })
                }
            />

            <button
                className="bg-green-700 px-6 py-2 rounded-full text-white hover:bg-green-500"
                onClick={handleAddTodo}
            >
                Add
            </button>
        </div>
    );
}

export default AddTodo;