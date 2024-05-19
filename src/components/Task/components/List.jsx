import React, { useState } from 'react';
import Item from './Item';

const List = ({ tasks, onComplete }) => {
  const [showCompleted, setShowCompleted] = useState(true);

  return (
    <div className="task--list">
      <button
        className="btn-filter"
        onClick={() => setShowCompleted(!showCompleted)}
      >
        {showCompleted ? 'Hide Completed Items' : 'Show Completed Items'}
      </button>
      <ul>
        {tasks.map(
          (task) =>
            (!task.completed || showCompleted) && (
              <Item key={task.id} task={task} onComplete={onComplete} />
            )
        )}
      </ul>
    </div>
  );
};

export default List;
