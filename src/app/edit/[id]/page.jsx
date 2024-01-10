"use client";
import React, { useEffect, useState } from "react";
import Form from "@/components/form";
import { useRouter } from "next/navigation";

export default function EditTodo({ params }) {
  const [task, setTask] = useState({});
  const { id } = params;
  const router = useRouter();

  useEffect(() => {
    const fetchedTasks = JSON.parse(localStorage.getItem("tasks"));
    setTask(fetchedTasks.find((t) => t.id == id));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchedTasks = JSON.parse(localStorage.getItem("tasks"));
    const updatedTasks = fetchedTasks.map((t) =>
      t.id == id ? { ...t, todo: task.todo } : t
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTask({});
    router.push("/");
  };
  return (
    <div>
      <h1>Edit Todo</h1>
      <Form task={task} setTask={setTask} handleSubmit={handleSubmit} />
    </div>
  );
}
