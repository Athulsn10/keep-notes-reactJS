import React, { useState } from 'react';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast';
import './App.css';
import GradientBackground from './Components/GradientBackground';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showA, setShowA] = useState(false);

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    toggleShowA(); 
  };

  const toggleShowA = () => setShowA(!showA);

  const addTask = (text) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length + 1, text, completed: false },
    ]);
  };

  return (
    <>
    <GradientBackground />
      <div className='divStyle'>
        
          <h1>Keep Notes</h1>
          <div>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </div>
      </div>
      <div className='tStyle'>
      <Toast show={showA} onClose={toggleShowA} delay={2000} autohide>
        <Toast.Header >
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Warning</strong>
        </Toast.Header>
        <Toast.Body>Task Deleted Succesfully!</Toast.Body>
      </Toast>
      </div>
    </>
  );
};

export default App;
