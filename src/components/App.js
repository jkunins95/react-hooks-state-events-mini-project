// add a click event (Delete) button - need to add useState
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);

  const handleDeleteTask = (deletedTask) => {
    // const filteredTasks = tasks.filter(task => deletedTask.text === task.text);
    // Example: 
    // 1. Clicking on "Build todo API" - upon clicking the delete button - the other tasks that do not match the name are then deleted

    // Inverse Logic - if the deleted task DOES NOT match the current task then save it - it is not the one we asked to delete
    const filteredTasks = tasks.filter(task => deletedTask.text !== task.text);

    // reset the state use the state setter function
    setTasks(filteredTasks);
  };

  const handleAddNewTask = (newTask) => {
    // console.log(newTask);
    // We want the new task to be added into the list

    // Use the spread operator
      // [...tasks] = makes a copy of the established list
      // newTasks = add the new task into the list
    setTasks([...tasks, newTask]);
  };


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter tasks={tasks} setTasks={setTasks} />
      <NewTaskForm categories={categories} handleAddNewTask={handleAddNewTask} />
      <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
