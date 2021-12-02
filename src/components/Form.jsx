import React from 'react';

import { v4 as uuidv4 } from 'uuid'; //External lib to create unique ID strings

//When the onChange event is triggered we create an object with a unique ID and the task.
//When the submit button is clicked we trigger the handleSubmit function, which will add our task
//to our tasks array.
const Form = ({ task, setTask, handleSubmit }) => {
  return (
    <form>
      <label>Please enter your task</label>
      <input
        type='text'
        maxLength='100'
        value={task.task}
        onChange={(e) =>
          setTask({ id: uuidv4(), task: e.target.value, done: false })
        }
      />
      <button onClick={(e) => handleSubmit(e)}>Add task</button>
    </form>
  );
};

export default Form;
