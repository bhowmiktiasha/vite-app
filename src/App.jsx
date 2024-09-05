
import './App.css'

import { useState } from 'react';
import TodoItem from './TodoItem';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleToggleTask = (index) => {
    const newTasks = tasks.map((t, i) => 
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((t, index) => (
          <TodoItem 
            key={index} 
            task={t} 
            onToggle={() => handleToggleTask(index)} 
            onRemove={() => handleRemoveTask(index)} 
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
