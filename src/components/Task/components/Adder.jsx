import React, { useState } from 'react';

const Adder = ({ onAdd }) => {
  const [id, setId] = useState(1);
  const [content, setContent] = useState('');

  const handleAdd = () => {
    content.trim() && onAdd({ id: id, content: content, completed: false });
    setId(id + 1);
    setContent('');
  };

  return (
    <div className="task--adder">
      <input
        type="text"
        placeholder="Add a new task here ..."
        maxLength={255}
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <button className="btn-add" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Adder;
