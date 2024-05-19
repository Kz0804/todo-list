import React, { useState } from 'react';
import Adder from './components/Adder';
import List from './components/List';

const Task = () => {
  const [tasks, setTasks] = useState([]);

  const onAdd = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <main>
      <Adder onAdd={onAdd} />
      <List tasks={tasks} />
    </main>
  );
};

export default Task;
