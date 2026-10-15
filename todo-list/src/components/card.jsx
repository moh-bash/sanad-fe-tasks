import { Check, CircleX, SquarePen } from "lucide-react";
import { useTodo } from '../stores/useTodo';
import { useState } from "react";


function Card({ task  }) {
    const {removeTodo, toggleTodo, setIdTask} = useTodo((state) => state);

    return (
        <div className={`flex items-center justify-between mb-3 border border-gray-300 p-4 rounded-2xl ${task.completed ? "bg-gray-100 border-green-300" : "bg-white border-gray-300"}`}>
            <div className="flex flex-col me-3 w-full">
                <h3 className={`font-bold line-clap1 ${task.completed ? "line-through text-gray-400":""}`}>{task.title}</h3>
                <p className={`line-clamp-2 max-w-full ${task.completed ? "text-gray-400":""}`}>{task.description}</p>
            </div>

            <div className="flex items-center gap-2">
                <button 
                className="hover:bg-blue-100 p-2 rounded-full cursor-pointer"
                 onClick={() => setIdTask(task.id)}>
                    <SquarePen className="text-blue-500" />
                </button>

                <button 
                className="hover:bg-red-100 p-2 rounded-full cursor-pointer"
                onClick={() => removeTodo(task.id)}>
                    <CircleX className="text-red-500" />
                </button>

                <label className="relative inline-flex cursor-pointer items-center">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTodo(task.id)}
                        className="peer appearance-none h-7 w-7 rounded-full border-2 border-gray-800 checked:bg-green-700 checked:border-green-700"
                    />
                    <Check
                        size={18}
                        strokeWidth={3}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                    />
                </label>
            </div>
        </div>
    )
}

export default Card;
