import styles from "@/components/form.module.css";

export default function Form({ task, setTask, handleSubmit }) {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={task.todo || ""}
        placeholder="My first task"
        onChange={(e) => setTask({ ...task, todo: e.target.value })}
      />
      <button className={styles.button} type="submit">
        Save
      </button>
    </form>
  );
}
