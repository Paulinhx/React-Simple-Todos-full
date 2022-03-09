import React from 'react';

import Task from './Task';

const TaskContainer = ({ tasks, handleDelete }) => {
  return (
    <aside>
      <h3>Active Tasks</h3>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task key={task.id} task={task} handleDelete={handleDelete} />
        ))
      ) : (
        <h2>No tasks pending</h2>
      )}
    </aside>
  );
};

export default TaskContainer;
