import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTask(text);
      setText('');
    }
  };

  return (
    <form className='d-flex' onSubmit={handleSubmit}>
      <Form.Control placeholder="Add a new task"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button className='ms-2' variant="primary" type='submit'>Add</Button>{' '}
    </form>
  );
};

export default TaskForm;
