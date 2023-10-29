import React from 'react';
import { Row, Col, Button,  } from 'react-bootstrap';

const TaskItem = ({ task, deleteTask }) => {
  return (
  
      <Row  className=" mt-4">
        <Col style={{paddingLeft:'20px'}} md={9}>
          <span style={{ boxSizing: 'border-box', display: 'block' }} className='text-truncate'>{task.text}</span>
        </Col>
        <Col style={{paddingLeft:'70px'}} md={3}>
          <Button variant="danger" onClick={() => deleteTask(task.id)}>
            Delete
          </Button>
        </Col>
      </Row>
    
  );
};

export default TaskItem;
