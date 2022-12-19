import React from 'react'

function TodoItem({
  id,
  completed,
  text,
  toggleCompleted,
  toggleEditing,
  deleteTodo,
}) {
  // 解構，改為在傳入參數時寫
  //const { id, completed, text, toggleCompleted, deleteTodo } = props

  return (
    <>
      <li className={completed ? 'completed' : 'not-completed'}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleCompleted(id)}
        />
        {text}
        <button onClick={() => toggleEditing(id)}>編輯</button>
        <button onClick={() => deleteTodo(id)}>刪除</button>
      </li>
    </>
  )
}

export default TodoItem