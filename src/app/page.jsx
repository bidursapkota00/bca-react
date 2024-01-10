"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/components/home.module.css";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (fetchedTasks) {
      setTasks(fetchedTasks);
    }
  }, []);

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.todo}>
      <h1>To-Do List</h1>
      {tasks.length ? (
        <ul className={styles.list}>
          {tasks.map((task) => (
            <li key={task.id} className={styles.listItem}>
              <span className={styles.text}>{task.todo}</span>
              <div>
                <Link
                  className={`${styles.link} ${styles.edit}`}
                  href={`/edit/${task.id}`}
                >
                  Edit
                </Link>
                <button
                  className={`${styles.link} ${styles.delete}`}
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h1 className={styles.no}>No Items Found</h1>
      )}

      <Link href="/edit" className={styles.link}>
        Add New Task
      </Link>
    </div>
  );
}
