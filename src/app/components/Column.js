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
  return (
    <div className="column">
      <div className="titleWrapper">
        <p>{state}</p>
        <p>{String(open)}</p>

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
