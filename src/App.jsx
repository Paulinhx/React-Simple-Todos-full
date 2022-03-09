import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid'; //External lib to create unique ID strings

import Header from './components/Header';
import TaskContainer from './components/TaskContainer';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  const [taskInput, setTaskInput] = useState('');
  const [task, setTask] = useState({ id: 0, todo: '' }); //Create state for each individual task
  const [tasks, setTasks] = useState([]); //Create state to hold all entered tasks in an array

  const inputRef = useRef();

  //Use an effect to only run once to collect whatever was stored inside localStorage
  useEffect(() => {
    let storage = localStorage.getItem('tasks');
    let storageItem = JSON.parse(storage);
    storageItem && setTasks(storageItem);
  }, []);

  //Use an effect to write to localStorage whenever the tasks array changes
  useEffect(() => {
    tasks.length >= 0 && localStorage.setItem('tasks', JSON.stringify(tasks)); //Only add or update localStorage if there are tasks in our tasks array
  }, [tasks]);

  //We could of course put this focus in the above useEffect that has an empty dependency array.
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  //Everytime we have a new task we need to include it inside our tasks array
  useEffect(() => {
    task.todo.length > 0 && setTasks([...tasks, task]);
  }, [task]); // eslint-disable-line react-hooks/exhaustive-deps

  //Once the user enters a new task and clicks on the submit button this function gets called
  //This will take the entered task, make sure something has been entered into the field and
  //add it to our array. We then clear out the input field. As we are checking any changes in our
  //array(tasks) with our effect above these changes will get written to our localStorage.
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask({ id: uuidv4(), todo: taskInput });
    setTaskInput('');
    inputRef.current.focus();
  };

  //This function accepts an ID as a parameter. We use this ID to filter out the task we need removed.
  const handleDelete = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
    inputRef.current.focus();
  };

  //On the return we send all the data and functionality as props to our components wherever they are needed.
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
