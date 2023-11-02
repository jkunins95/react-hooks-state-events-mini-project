import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task task={task} />
      ))}
    </div>
  );
}

export default TaskList;
