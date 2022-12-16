import React from 'react'

function TodoList({ todos, toggleCompleted, deleteTodo }) {
  return (
    <>
      <ul>
        {todos.map((v, i) => {
          return (
            <li
              key={v.id}
              className={v.completed ? 'completed' : 'not-completed'}
            >
              <input
                type="checkbox"
                checked={v.completed}
                onChange={() => toggleCompleted(v.id)}
              />
              {v.text}
              <button onClick={() => deleteTodo(v.id)}>刪除</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
