import { TodoItems } from "../TodoItems/TodoItems"
import PropTypes from "prop-types";


export const TodoList = ({ todos, updateTodo, startEditingTodo, deleteTodo }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around align-items-center row-gap-3 justify-content-md-start gap-sm-5 ">
      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoItems todo={todo} updateTodo={updateTodo} startEditingTodo={startEditingTodo} deleteTodo={deleteTodo} />
        </div>
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  updateTodo: PropTypes.func.isRequired,
  startEditingTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};