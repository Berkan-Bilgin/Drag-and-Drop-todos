"use client";
import classNames from "classnames";
import "./Task.css";
import React from "react";
import { useStore } from "@/store/taskStore";

const Task = ({ title }) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );

  console.log("task nedir", task);
  return (
    <div className="task">
      <div>{title}</div>

      <div className="bottomWrapper">
        <div></div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
};

export default Task;
