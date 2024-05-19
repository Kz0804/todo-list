import React from 'react';

const List = ({ tasks }) => {
  return (
    <div className="task--list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
