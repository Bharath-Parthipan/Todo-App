
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

  const addTodo = () => {
    if (newTodo.name.trim() === "" || newTodo.description.trim() === "") return;
    setTodos([...todos, { ...newTodo, id: Date.now() }]);
    setNewTodo({ name: '', description: '', status: 'not completed' });
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
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
      <div className="master-container">
        <div className="container master-card">
          <div className="space-img1-wrapper">
            <div className="space-img1">
              <img src={SpaceToy1} alt="" />
              <h1 className="title"><span className="color">My</span>Todo</h1>
            </div>
          </div>

          <div className="space-img2-wrapper">
            <div className="space-img2">
              <img src={SpaceToy2} alt="" />
            </div>
          </div>

          <div className="content">
            <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo}/>
            <div className='d-flex justify-content-between align-items-center mb-4'>
              <h4><span className="color">My</span> Todos</h4>
              <TodoFilter filter={filter} setFilter={setFilter}/>
            </div>
            <div className='todolists-container p-2'>
              <TodoList todos={filteredTodos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App
