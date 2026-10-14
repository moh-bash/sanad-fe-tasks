
import { create } from 'zustand';
import { persist } from 'zustand/middleware'


export const useTodo = create(
  (set) => (
    persist(
      (set) => ({
        tasks: [],
        idTask: null,

        addTodo: (task) =>
          set((state) => ({
            tasks: [...state.tasks, task],
          })),

        removeTodo: (id) =>
          set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
          })),

        updateTodo: (id, updatedTask) =>
          set((state) => ({
            tasks: state.tasks.map((task) =>
              task.id === id
                ? { ...task, ...updatedTask }
                : task
            ),
          })),

        toggleTodo: (id) =>
          set((state) => ({
            tasks: state.tasks.map((task) =>
              task.id === id
                ? { ...task, completed: !task.completed }
                : task
            ),
          })),

        setIdTask: (id) => set({ idTask: id })
      }),
      {
        name: 'tasks-storage',
      }
    )
  ));
