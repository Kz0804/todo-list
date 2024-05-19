import React, { useState } from 'react';

const Adder = ({ onAdd }) => {
  const [id, setId] = useState(1);
  const [content, setContent] = useState('');
  const [success, setSuccess] = useState(false);

  const handleAdd = () => {
    if (content.trim()) {
      onAdd({ id: id, content: content, completed: false });
      setId(id + 1);
      setContent('');
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 600);
    }
  };

  return (
    <div className="task__adder">
      <input
        type="text"
        placeholder="Add a new task here ..."
        maxLength={255}
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      {!success ? (
        <button className="btn-add" onClick={handleAdd}>
          <span>+</span>
        </button>
      ) : (
        <button className="btn-succeed">✓</button>
      )}
    </div>
  );
};

export default Adder;
