import React, { useState } from 'react';
import Item from './Item';

const List = ({ tasks, onComplete, onDelete }) => {
  const [showCompleted, setShowCompleted] = useState(true);

  return (
    <div className="task__list">
      <div className="task__list-filter">
        <button
          className="btn-filter"
          onClick={() => setShowCompleted(!showCompleted)}
        >
          {showCompleted ? 'All' : 'Undo'}
        </button>
      </div>

      <div className="task__list-stats">
        <p>
          <span className="created">Task created</span>{' '}
          <span className="count-display">{tasks.length}</span>
        </p>
        <p>
          <span className="completed">Completed</span>{' '}
          <span className="count-display">
            {tasks.filter((task) => task.completed === true).length} of{' '}
            {tasks.length}
          </span>
        </p>
      </div>

      {tasks.length === 0 && (
        <div className="task__list--empty">
          <img
            src="data:image/png;base64,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"
            alt="Clipboard Icon"
          />
          <p className="bold">Your todo list is empty.</p>
          <p>Let's add something!</p>
        </div>
      )}

      <ul className="task__list-details">
        {tasks.map(
          (task) =>
            (!task.completed || showCompleted) && (
              <Item
                key={task.id}
                task={task}
                onComplete={onComplete}
                onDelete={onDelete}
              />
            )
        )}
      </ul>
    </div>
  );
};

export default List;
