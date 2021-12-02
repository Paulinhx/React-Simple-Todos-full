import React from 'react';

import logo from '../assets/logo.png';
import Form from './Form';

//As our Form component is a child of this Header component and bits of our data and functionality
//will be used by the Form component, we need to send these props down to the Form
const Header = ({ task, setTask, handleSubmit }) => {
  return (
    <header>
      <img src={logo} alt='logo' />
      <Form task={task} setTask={setTask} handleSubmit={handleSubmit} />
    </header>
  );
};

export default Header;
