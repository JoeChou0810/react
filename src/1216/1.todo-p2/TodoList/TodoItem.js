import React from 'react'

function TodoItem({ id, completed, text, toggleCompleted, deleteTodo }) {
  // const { id, completed, text, toggleCompleted, deleteTodo } = props

  return (
    <>
      <li key={id} className={completed ? 'completed' : 'not-completed'}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleCompleted(id)}
        />
        {text}
        <button onClick={() => deleteTodo(id)}>刪除</button>
      </li>
    </>
  )
}

export default TodoItem
