import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";

import "./TodoForm.css";

export const TodoForm = ({ newTodo, setNewTodo, addOrUpdateTodo, isEditing }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    addOrUpdateTodo();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-4 d-flex flex-wrap justify-content-between pb-4 border-bottom">
        <Form.Control className='inputbox' type="text" placeholder="Todo Name" value={newTodo.name} onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}/>
        <Form.Control className="inputbox" type="text" placeholder="Todo Description" value={newTodo.description} onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })} />
        <Button className='button-style' type="submit">{isEditing ? 'Update Task' : 'Add Task'}</Button>
      </Form.Group>
    </Form>
  );
}

TodoForm.propTypes = {
  newTodo: PropTypes.object,
  setNewTodo: PropTypes.func.isRequired,
  addOrUpdateTodo: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
};