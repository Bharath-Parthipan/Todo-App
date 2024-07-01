import { TodoItems } from "../TodoItems/TodoItems"
import PropTypes from "prop-types";


export const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <div className="d-flex flex-wrap align-items-center gap-2">
      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoItems todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        </div>
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(),
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};