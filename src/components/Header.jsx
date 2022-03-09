import React from 'react';

import logo from '../assets/logo.png';
import Form from './Form';

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
