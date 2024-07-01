import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import "./TodoItems.css"

export const TodoItems = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <Card className="card-design" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{todo.name}</Card.Title>
        <Card.Text>{todo.description}</Card.Text>
        <Card.Text className="d-flex gap-2 align-items-center">
          <Form.Label>Status :</Form.Label>
          <Form.Control className="dropdown2-box" as="select" value={todo.status} onChange={(e) => updateTodo(todo.id, { ...todo, status: e.target.value })}>
            <option value="not completed">Not Completed</option>
            <option value="completed">Completed</option>
          </Form.Control>
        </Card.Text>
        <div className="d-flex justify-content-end gap-2">
          <Button className="button-edit" onClick={() => updateTodo(todo.id, {...todo, name: prompt('Update Task Name', todo.name), description: prompt('Update Description', todo.description),})}>Edit</Button>
          <Button className="button-delete" onClick={() => deleteTodo(todo.id)}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

TodoItems.propTypes = {
  todo: PropTypes.array ,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};