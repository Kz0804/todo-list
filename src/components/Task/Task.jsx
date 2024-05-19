import React, { useState } from 'react';
import Adder from './components/Adder';
import List from './components/List';

const Task = () => {
  const [tasks, setTasks] = useState([]);

  const onAdd = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const onComplete = (completedTaskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === completedTaskId ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <>
      <Adder onAdd={onAdd} />
      <List tasks={tasks} onComplete={onComplete} />
    </>
  );
};

export default Task;
