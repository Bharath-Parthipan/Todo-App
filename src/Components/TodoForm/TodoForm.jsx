import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";

import "./TodoForm.css";

export const TodoForm = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <div>
      <Form.Group className="mb-4 d-flex justify-content-between pb-4 border-bottom">
        <Form.Control className='inputbox' type="text" placeholder="Todo Name" value={newTodo.name} onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}/>
        <Form.Control className="inputbox" type="text" placeholder="Todo Discription" value={newTodo.description} onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })} />
        <Button className='button-style' type="submit" onClick={addTodo}>Add Todo</Button>
      </Form.Group>
    </div>
  );
}

TodoForm.propTypes = {
  newTodo: PropTypes.object,
  setNewTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};