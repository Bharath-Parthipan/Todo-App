
import SpaceToy1 from './assets/todoToy1.png';
import SpaceToy2 from './assets/todoToy2.png';
import './App.css'
import { TodoForm } from './Components/TodoForm/TodoForm';
import { TodoFilter } from './Components/TodoFilter/TodoFilter';
import { TodoList } from './Components/TodoList/TodoList';
import { useState } from 'react';


function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ name: '', description: '', status: 'not completed' });
  const [filter, setFilter] = useState('all');
  const [editingTodo, setEditingTodo] = useState(null);

  const addOrUpdateTodo = () => {
    if (newTodo.name.trim() === '' || newTodo.description.trim() === '') return;

    if (editingTodo) {
      setTodos(todos.map(todo => (todo.id === editingTodo.id ? { ...newTodo, id: editingTodo.id } : todo)));
      setEditingTodo(null);
    } else {
      setTodos([...todos, { ...newTodo, id: Date.now() }]);
    }

    setNewTodo({ name: '', description: '', status: 'not completed' });
  };

  const startEditingTodo = (todo) => {
    setNewTodo({ name: todo.name, description: todo.description, status: todo.status });
    setEditingTodo(todo);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    return todo.status === filter;
  });

  return (
    <>
      <div className="Master-Container">
        <div className="Main-container">
          <div className="container container-card-wrapper d-flex justify-content-center align-items-center">
            <div className="container-card rounded-5 py-4 px-3 p-sm-4">
              <div className="py-2">
                <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addOrUpdateTodo={addOrUpdateTodo} isEditing={!!editingTodo} />
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                  <h4><span className="color">My</span> Todos</h4>
                  <TodoFilter filter={filter} setFilter={setFilter} />
                </div>
                <div className="todolists-container pt-2 px-2" style={{ paddingBottom: "100px" }}>
                  <TodoList todos={filteredTodos} updateTodo={updateTodo} startEditingTodo={startEditingTodo} deleteTodo={deleteTodo} />
                </div>
              </div>

              <div className="SpaceToy1-image-wrap d-flex align-items-center gap-4">
                <img src={SpaceToy1} alt="" />
                <h1 className="title">
                  <span className="color">My</span>Todo
                </h1>
              </div>
              <div className="SpaceToy2-image-wrap d-flex align-items-center gap-4">
                <img src={SpaceToy2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
