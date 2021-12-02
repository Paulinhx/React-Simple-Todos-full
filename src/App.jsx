import { useState, useEffect } from 'react';

import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  const [task, setTask] = useState({ id: 0, task: '', done: false }); //Create state for each individual task
  const [tasks, setTasks] = useState([]); //Create state to hold all entered tasks in an array

  //Use an effect to only run once to collect whatever was stored inside localStorage
  useEffect(() => {
    let storage = localStorage.getItem('tasks');
    let storageItem = JSON.parse(storage);
    storageItem !== null && setTasks(storageItem);
  }, []);

  //Use an effect to write to localStorage whenever the tasks array changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  //Once the user enters a new task and clicks on the submit button this function gets called
  //This will take the entered task, make sure something has been entered into the field and
  //add it to our array. We then clear out the input field. As we are checking any changes in our
  //array(tasks) with our effect above these changes will get written to our localStorage.
  const handleSubmit = (e) => {
    e.preventDefault();

    task.task.length > 0 && setTasks([...tasks, task]);
    setTask({ id: 0, task: '', done: false });
  };

  //This function accepts an ID as a parameter. We use this ID to filter out the task we need removed.
  const handleDelete = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  //On the return we send all the data and functionality as props to our components wherever they are needed.
  return (
    <main>
      <Header task={task} setTask={setTask} handleSubmit={handleSubmit} />
      <Section tasks={tasks} handleDelete={handleDelete} />
      <Footer />
    </main>
  );
};

export default App;
