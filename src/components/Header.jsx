import React from 'react';

import logo from '../assets/logo.png';
import Form from './Form';

//As our Form component is a child of this Header component and bits of our data and functionality
//will be used by the Form component, we need to send these props down to the Form
const Header = ({ taskInput, setTaskInput, handleSubmit, inputRef }) => {
  return (
    <header>
      <img src={logo} alt='logo' />
      <Form
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        handleSubmit={handleSubmit}
        inputRef={inputRef}
      />
    </header>
  );
};

export default Header;
