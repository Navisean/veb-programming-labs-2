import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItems from './ToDoItems';
import './ToDoList.css';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [showList, setShowList] = useState(false);
  const [filter, setFilter] = useState('all');

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleSubmit = () => {
    if (showList) {
      setTasks(tasks.filter(task => !task.completed));
    }
    setShowList(!showList);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div className="todo-list">
      <h1>ToDo List</h1>
      <ToDoForm addTask={addTask} />
      
      <div className="filter-buttons">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          Все
        </button>
        <button 
          className={filter === 'active' ? 'active' : ''} 
          onClick={() => setFilter('active')}
        >
          Активные
        </button>
        <button 
          className={filter === 'completed' ? 'active' : ''} 
          onClick={() => setFilter('completed')}
        >
          Выполненные
        </button>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        {showList ? 'Обновить список' : 'Показать список'}
      </button>

      {showList && <ToDoItems tasks={filteredTasks} toggleTask={toggleTask} />}
    </div>
  );
}

export default ToDoList;