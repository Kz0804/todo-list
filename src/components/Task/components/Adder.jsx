import React, { useState } from 'react';

const Adder = () => {
  const [content, setContent] = useState('');

  return (
    <div className="task--adder">
      <input
        type="text"
        placeholder="Add a new task here ..."
        maxLength={255}
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <button className="btn-add">Add</button>
    </div>
  );
};

export default Adder;
