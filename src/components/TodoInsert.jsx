import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [text, setText] = useState('');

  const onSubmit = useCallback(
    (e) => {
      onInsert(text);
      setText('');
      e.preventDefault();
    },
    [text, onInsert],
  );

  const onChange = useCallback((e) => setText(e.target.value), []);

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input value={text} placeholder="your duty" onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
