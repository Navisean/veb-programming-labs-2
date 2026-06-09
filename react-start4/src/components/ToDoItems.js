import React from 'react';
import './ToDoItems.css';

function ToDoItems({ tasks, toggleTask }) {
  return (
    <ul className="todo-items">
      {tasks.map(task => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span>{task.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default ToDoItems;