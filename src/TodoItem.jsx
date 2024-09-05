import React from 'react';

function TodoItem({ task, onToggle, onRemove }) {
  return (
    <li
      style={{
        textDecoration: task.completed ? 'line-through' : 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 0',
      }}
    >
      <span
        onClick={onToggle}
        style={{ cursor: 'pointer', flex: 1 }}
      >
        {task.text}
      </span>
      <button
        onClick={onRemove}
        style={{
          background: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '4px 8px',
          cursor: 'pointer',
        }}
      >
        Remove
      </button>
    </li>
  );
}

export default TodoItem;

  