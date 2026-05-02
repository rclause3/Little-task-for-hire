import React from "react";
import { useParams, Link } from "react-router-dom";

function TaskDetail({ tasks }) {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === id);

  if (!task) return <div>Task not found. <Link to="/tasks">Back to tasks</Link></div>;

  return (
    <div>
      <h2>{task.title}</h2>
      <b>Description:</b>
      <div style={{ marginBottom: 12 }}>{task.description}</div>
      {task.location && (
        <>
          <b>Location:</b> {task.location}
          <br />
        </>
      )}
      <b>Contact:</b>{" "}
      <a href={`mailto:${task.email}?subject=Help%20with%20task%3A%20${encodeURIComponent(task.title)}`}>
        {task.email}
      </a>
      <br /><br />
      <Link to="/tasks">Back to tasks</Link>
    </div>
  );
}

export default TaskDetail;
