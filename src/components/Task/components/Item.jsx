import React from 'react';

const Item = ({ task, onComplete, onDelete }) => {
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
      <button className="btn-delete" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Item;
