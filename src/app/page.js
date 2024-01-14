"use client";
import Image from "next/image";
import Column from "./components/Column";
import { useStore } from "@/store/taskStore";

export default function Home() {
  const tasks = useStore((state) => state.tasks);
  return (
    <>
      <div className="App">
        <Column state="PLANNED" />
        <Column state="ONGOING" />

        <Column state="DONE" />
      </div>

      <div className="bg-red-500"> {tasks[0].title}</div>
    </>
  );
}
