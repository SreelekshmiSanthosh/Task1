import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"; 

const TaskTree = ({ tasks, parentId = null }) => {
  
  const filteredTasks = tasks.filter(
    (task) => task.parentServicePackageTaskId === parentId
  );

  return (
    <div className="task-tree">
      {filteredTasks.map((task) => (
        <TaskNode key={task.id} task={task} tasks={tasks} />
      ))}
    </div>
  );
};

const TaskNode = ({ task, tasks }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const hasChildren = tasks.some(
    (t) => t.parentServicePackageTaskId === task.id
  );

  return (
    <div className="task">
      <div onClick={toggleExpand} className="task-header">
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        <span>{task.estimatedMinutes} min</span>
        {hasChildren && (
          <button className="expand-btn" onClick={toggleExpand}>
            <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
          </button>
        )}
      </div>
      {isExpanded && hasChildren && (
        <div className="task-children">
          <TaskTree tasks={tasks} parentId={task.id} />
        </div>
      )}
    </div>
  );
};

export default TaskTree;
