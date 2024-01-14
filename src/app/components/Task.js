"use client";
import classNames from "classnames";
import "./Task.css";
import React from "react";
import { useStore } from "@/store/taskStore";
import { FaTrash } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

const Task = ({ title }) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );

  const setDraggedTask = useStore((store) => store.setDraggedTask);

  const deleteTask = useStore((store) => store.deleteTask);

  console.log("task nedir", task);
  return (
    <div
      className="task"
      draggable
      onDragStart={() => {
        setDraggedTask(task.title);
      }}
    >
      <div>{title}</div>

      <div className="bottomWrapper">
        <button onClick={() => deleteTask(task.title)}>
          <FaRegTrashCan />
        </button>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
};

export default Task;
