import { useState } from 'react'

import AddForm from './AddForm'
import TodoList from './TodoList'

import './TodoApp.css'

function TodoApp() {
  // 文字輸入框用
  const [inputValue, setInputValue] = useState('')
  // todo列表用
  // 每個todo項目: ex. {id: number, text: string, completed: bool }
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: true },
    { id: 2, text: '學react', completed: false },
  ])

  const [todosDisplay, setTodosDisplay] = useState([])

  // 過濾目前呈現項目用的選項
  // type =  'All' | 'Active' | 'Completed'
  const [currentFilter, setCurrentFilter] = useState('All')
  const [searchWord, setSearchWord] = useState('')
  const getSearchTodos = (items) => {
    return items.filter((v, i) => {
      return v.text.includes(searchWord)
    })
  }
  // 檢查用的函式
  // 回傳過濾後的todos
  const getFilterTodos = (items) => {
    // return todos.filter((v, i) => {
    //   if (currentFilter === 'All') return true
    //   if (currentFilter === 'Active') return !v.completed
    //   if (currentFilter === 'Completed') return v.completed
    // })
    if (currentFilter === 'All') return todos

    if (currentFilter === 'Active') {
      return items.filter((v, i) => {
        return v.completed === false
      })
    }

    if (currentFilter === 'Completed') {
      return items.filter((v, i) => {
        return v.completed === true
      })
    }
  }
  const applyFilterTodos = () => {
    let newTodos = getSearchTodos(todos)

    newTodos = getFilterTodos(newTodos)

    setTodosDisplay(newTodos)
  }

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
    }

    // 1 2 3 三步驟(拷貝 -> 加入到新陣列中 -> 設定回state)
    setTodos([newTodo, ...todos])
  }

  const toggleCompleted = (id) => {
    //1. 從目前的state拷貝出一個新的物件陣列
    const newTodos = todos.map((v2) => {
      return { ...v2 }
    })

    // 2. 在新的物件陣列上作處理
    // toggle(切換)-> true變false false變true
    const index = newTodos.findIndex((v3, i3) => {
      return v3.id === id
    })

    // 有找到時
    if (index !== -1) {
      newTodos[index].completed = !newTodos[index].completed

      // 3. 設定回state中
      setTodos(newTodos)
    }
  }

  const deleteTodo = (id) => {
    //1, 2
    const newTodos = todos.filter((v2, i2) => {
      return id !== v2.id
    })

    // 3
    setTodos(newTodos)
  }

  return (
    <>
      <AddForm addTodo={addTodo} />
      <hr />
      <TodoList
        // todos 改為 getFilterTodos
        todos={getFilterTodos()}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
      {/* 以下為過濾用按鈕 */}
      <input
        type="text"
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value)
        }}
      />
      <button onClick={() => {}}>Search</button>
      <br />
      <button
        className={
          currentFilter === 'All'
            ? 'filter-button-active'
            : 'filter-button-normal'
        }
        onClick={() => {
          setCurrentFilter('All')
        }}
      >
        All(所有)
      </button>
      <button
        className={
          currentFilter === 'Active'
            ? 'filter-button-active'
            : 'filter-button-normal'
        }
        onClick={() => {
          setCurrentFilter('Active')
        }}
      >
        Active(進行中)
      </button>
      <button
        className={
          currentFilter === 'Completed'
            ? 'filter-button-active'
            : 'filter-button-normal'
        }
        onClick={() => {
          setCurrentFilter('Completed')
        }}
      >
        Completed(已完成)
      </button>
    </>
  )
}

export default TodoApp
