import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map(task => (
        // need to add a key prop (since there is no ID available, can just use "text" as the unique identifier)
        <Task key={task.text} task={task} />
      ))}
    </div>
  );
}

//   return (
//     <div className="tasks">
//       {tasks.map(task => (
//         <Task task={task.text} category={task.category} />
//       ))}
//     </div>
//   );
// }

export default TaskList;
