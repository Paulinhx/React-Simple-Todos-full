import React from 'react';

import { MdDelete } from 'react-icons/md'; //Grab our icon from this external library

const Task = ({ task, handleDelete }) => {
  return (
    <div className='task-container'>
      <div className='task'>
        <p>{task.todo}</p>
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
