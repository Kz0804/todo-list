import React from 'react';

const Item = ({ task, onComplete }) => {
  const { id, content, completed } = task;

  return (
    <li
      className={completed ? 'task__list-item--completed' : 'task__list-item'}
    >
      {content}
      {!completed && (
        <button className="btn-complete" onClick={() => onComplete(id)}>
          Complete
        </button>
      )}
      <button className="btn-delete">Delete</button>
    </li>
  );
};

export default Item;
