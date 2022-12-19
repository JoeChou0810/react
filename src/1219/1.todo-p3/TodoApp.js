import { useState } from 'react'

import AddForm from './AddForm'
// 導入資料夾的index.js可以寫為導入資料夾路徑，下面的語法相同結果
// import TodoList from './TodoList/index'
import TodoList from './TodoList'

import './TodoApp.css'

function TodoApp() {
  // todo列表用
  // 每個todo項目: ex. {id: number, text: string, completed: boolean, editing: boolean }
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: true, editing: false },
    { id: 2, text: '學react', completed: false, editing: false },
  ])

  // 過濾目前呈現項目用選項
  // type= 'All' | 'Active' | 'Completed'
  const [currentFilter, setCurrentFilter] = useState('All')
  const filterOptions = ['All', 'Active', 'Completed']

  const getFilterTodos = () => {
    if (currentFilter === 'All') return todos

    if (currentFilter === 'Active') {
      return todos.filter((v, i) => {
        return v.completed === false
      })
    }

    if (currentFilter === 'Completed') {
      return todos.filter((v, i) => {
        return v.completed === true
      })
    }
  }

  // 下面為處理todos state各種操作用方法
  // 新增一筆資料
  const addTodo = (text) => {
    // id產生的幾種方式:
    // 1. 用加入當下的時間微秒值(ps. 不適合多人使用系統)
    // 2. id是數字時，可求出最大值再遞增(類似資料庫中的auto increment)
    // 3. 隨機產生語法或函式庫 例如 uuid/nanoid 等函式庫

    // 先寫出要新增的物件值
    // id用時間日期物件的微秒值
    const newTodo = {
      id: Number(new Date()),
      text: text,
      completed: false,
      editing: false,
    }

    // 三步驟(拷貝 -> 加入到新陣列中 -> 設定回state)
    setTodos([newTodo, ...todos])
  }

  // 切換某筆資料的completed值
  const toggleCompleted = (id) => {
    // 三步驟(拷貝 -> 加入到新陣列中 -> 設定回state)
    const newTodos = todos.map((v) => {
      // toggle(切換)-> true變false false變true
      if (v.id === id) return { ...v, completed: !v.completed }
      return { ...v }
    })

    setTodos(newTodos)
  }

  // 切換某筆資料的editing值
  const toggleEditing = (id) => {
    // 三步驟(拷貝 -> 加入到新陣列中 -> 設定回state)
    const newTodos = todos.map((v) => {
      // toggle(切換)-> true變false false變true
      if (v.id === id) return { ...v, editing: !v.editing }

      // 設定其它非選中的項目，editing: false
      // 同時間只有一個被編輯
      return { ...v, editing: false }
    })

    setTodos(newTodos)
  }

  const updateTodo = (id, text) => {
    // 三步驟(拷貝 -> 加入到新陣列中 -> 設定回state)
    const newTodos = todos.map((v, i) => {
      // 更新文字，改回非編輯狀態
      if (v.id === id) return { ...v, text: text, editing: false }

      return { ...v }
    })

    setTodos(newTodos)
  }

  // 刪除某筆資料
  const deleteTodo = (id) => {
    //1, 2
    const newTodos = todos.filter((v, i) => {
      return id !== v.id
    })

    // 3
    setTodos(newTodos)
  }

  return (
    <>
      <AddForm addTodo={addTodo} />
      <TodoList
        // todos改為getFilterTodos
        todos={getFilterTodos()}
        toggleCompleted={toggleCompleted}
        toggleEditing={toggleEditing}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
      {/* 以下為過濾用按鈕 */}
      {filterOptions.map((v, i) => {
        return (
          <button
            key={i}
            className={
              currentFilter === v
                ? 'filter-button-active'
                : 'filter-button-normal'
            }
            onClick={() => {
              setCurrentFilter(v)
            }}
          >
            {v}
          </button>
        )
      })}
    </>
  )
}

export default TodoApp
