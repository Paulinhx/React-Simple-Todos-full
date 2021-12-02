import React from 'react';

import TaskContainer from './TaskContainer';

//The section is acting as a middle man. We are sending props from our App to here, so that
//we can send these props down to TaskContainer
const Section = ({ tasks, handleDelete }) => {
  return (
    <section>
      <TaskContainer tasks={tasks} handleDelete={handleDelete} />
    </section>
  );
};

export default Section;
