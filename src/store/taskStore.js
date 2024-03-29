import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
const taskStore = (set) => ({
  tasks: [{ title: "TestTask", state: "DONE" }],
  draggedTask: null,
  addTask: (title, state) =>
    set((store) => ({ tasks: [...store.tasks, { title, state }] })),
  deleteTask: (title) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    })),
  setDraggedTask: (title) => set({ draggedTask: title }),
  moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { title, state } : task
      ),
    })),
});

export const useStore = create(
  persist(taskStore, {
    name: "store", // Kalıcı durum için anahtar adı
  })
);
