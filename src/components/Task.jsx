import React from 'react';

import { MdDelete } from 'react-icons/md'; //Grab our icon from this external library

const Task = ({ task, handleDelete }) => {
  //Display the task and the icon.
  //If the icon is clicked activate the handleDelete function and send it back the ID
  return (
    <div className='task-container'>
      <div className='task'>
        <p>{task.task}</p>
      </div>
      <div className='bin'>
        <MdDelete
          style={{ fontSize: '22px' }}
          onClick={() => handleDelete(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
