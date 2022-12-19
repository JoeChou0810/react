import React from 'react'

import TodoItem from './TodoItem'

function TodoList({ todos, toggleCompleted, deleteTodo }) {
  return (
    <>
      <ul>
        {todos.map((v, i) => {
          const { id, completed, text } = v

          return (
            <TodoItem
              key={id}
              id={id}
              completed={completed}
              text={text}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList