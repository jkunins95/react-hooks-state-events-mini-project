// When working a form, we want to create a piece of state to hold onto each input so that we can build out a new task object to send up to array and add it to the list of tasks
import React, { useState } from "react";

function NewTaskForm({ categories }) {
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");

  // Controlled Components - make the value of the inputs tied to the piece of state that they are responsible for to control the form
    // Add in the value={} on lines 15 and 19

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={details} />
      </label>
      <label>
        Category
        <select name="category" value={category}>
          {categories.map(category => (
            // lower case "option" creates a tag for each category name
            <option>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
