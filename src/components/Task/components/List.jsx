import React from 'react';
import Item from './Item';

const List = ({ tasks, onComplete }) => {
  return (
    <div className="task--list">
      <ul>
        {tasks.map((task) => (
          <Item key={task.id} task={task} onComplete={onComplete} />
        ))}
      </ul>
    </div>
  );
};

export default List;
