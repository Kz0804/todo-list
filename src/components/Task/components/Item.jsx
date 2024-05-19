import React from 'react';
import { ReactComponent as TrashIcon } from '../../../assets/trash.svg';

const Item = ({ task, onComplete, onDelete }) => {
  const { id, content, completed } = task;

  return (
    <li>
      <button
        className={`btn-complete ${completed ? 'completed' : ''}`}
        onClick={() => onComplete(id)}
      >
        <div>{completed ? '✓' : ''}</div>
      </button>
      {
        <span className={`task__content${completed ? '--completed' : ''}`}>
          {content}
        </span>
      }
      <button className="btn-delete" onClick={() => onDelete(id)}>
        <TrashIcon />
      </button>
    </li>
  );
};

export default Item;
