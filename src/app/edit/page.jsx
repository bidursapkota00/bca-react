"use client";
import React, { useState } from "react";
import Form from "@/components/form";
import { useRouter } from "next/navigation";

export default function AddTodo() {
  const [task, setTask] = useState({});
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    let fetchedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    fetchedTasks.push({ id: new Date().getTime(), ...task });
    localStorage.setItem("tasks", JSON.stringify(fetchedTasks));
    setTask({});
    router.push("/");
  };
  return (
    <div>
      <h1>Add Todo</h1>
      <Form task={task} setTask={setTask} handleSubmit={handleSubmit} />
    </div>
  );
}
