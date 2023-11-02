import React from "react";

function Task({task, handleDeleteTask}) {

  const handleDelete = () => {
    handleDeleteTask(task);
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

// function Task({ task, category }) {
//   return (
//     <div className="task">
//       <div className="label">{category}</div>
//       <div className="text">{text}</div>
//       <button className="delete">X</button>
//     </div>
//   );
// }

export default Task;
