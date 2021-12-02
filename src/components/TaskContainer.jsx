import React from 'react';

import Task from './Task';

//Here we are receiving the tasks array as well as the handleDelete function, which we need to send down to
//our Task component.
//We need to map through our tasks array. For each object we find inside the array we render oor Task component.
//Sending relevant data down to it.
const TaskContainer = ({ tasks, handleDelete }) => {
  return (
    <aside>
      <h3>Active Tasks</h3>
      {tasks.length > 0 ? (
        tasks.map((item) => (
          <Task key={item.id} task={item} handleDelete={handleDelete} />
        ))
      ) : (
        <h2>No tasks pending</h2>
      )}
    </aside>
  );
};

export default TaskContainer;
