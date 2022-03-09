import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import TaskContainer from './components/TaskContainer';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  const [taskInput, setTaskInput] = useState('');
  const [task, setTask] = useState({ id: 0, todo: '' });
  const [tasks, setTasks] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    let storage = localStorage.getItem('tasks');
    let storageItem = JSON.parse(storage);
    storageItem && setTasks(storageItem);
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    tasks.length >= 0 && localStorage.setItem('tasks', JSON.stringify(tasks)); //Only add or update localStorage if there are tasks in our tasks array
  }, [tasks]);

  useEffect(() => {
    task.todo.length > 0 && setTasks([...tasks, task]);
  }, [task]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask({ id: uuidv4(), todo: taskInput });
    setTaskInput('');
    inputRef.current.focus();
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
    inputRef.current.focus();
  };

  return (
    <main>
      <Header
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        handleSubmit={handleSubmit}
        inputRef={inputRef}
      />
      <TaskContainer tasks={tasks} handleDelete={handleDelete} />
      <Footer />
    </main>
  );
};

export default App;
