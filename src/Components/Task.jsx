import React from "react";

const Task = ({ task }) => (
  <div className="task">
    <h4>{task.title}</h4>
    <p>{task.description || "No description provided"}</p>
    <p>Estimated Minutes: {task.estimatedMinutes}</p>
    {task.children.length > 0 && (
      <div className="task-children">
        {task.children.map((child) => (
          <Task key={child.id} task={child} />
        ))}
      </div>
    )}
  </div>
);

export default Task;
