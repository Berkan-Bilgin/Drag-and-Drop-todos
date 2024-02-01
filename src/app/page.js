"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Column from "./components/Column";
import { useStore } from "@/store/taskStore";

export default function Home() {
  const tasks = useStore((state) => state.tasks);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Bu kod bloğu yalnızca istemci tarafında çalışacak
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <div className="App">
          <Column state="PLANNED" />
          <Column state="ONGOING" />

          <Column state="DONE" />
        </div>
      )}
    </>
  );
}
