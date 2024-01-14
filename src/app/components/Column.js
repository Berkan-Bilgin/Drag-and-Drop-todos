"use client";
import React, { useState } from "react";
import "./Column.css";
import Task from "./Task";
import { useStore } from "@/store/taskStore";

const Column = ({ state }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );
  const addTask = useStore((store) => store.addTask);
  const draggedTask = useStore((store) => store.draggedTask);

  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const moveTask = useStore((store) => store.moveTask);

  return (
    <div
      className="column"
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        moveTask(draggedTask, state);
        setDraggedTask(null);
        console.log("drop");
      }}
    >
      <div className="titleWrapper">
        <p>{state}</p>
        <h1>dragged task: {draggedTask} </h1>

        <button onClick={() => setOpen(!open)}>Add</button>
      </div>

      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
      {open && (
        <div className="Modal text-black">
          <div className="modalContent">
            <input onChange={(e) => setText(e.target.value)} value={text} />
            <button
              onClick={() => {
                addTask(text, state);
                setText("");
                setOpen(false);
              }}
            >
              Submit
            </button>
            <p className="text-white">{text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Column;
