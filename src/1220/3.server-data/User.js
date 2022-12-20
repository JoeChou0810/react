import { useState, useEffect } from 'react'

// 需先安裝 axios : yarn add axios
import axios from 'axios'

import './User.css'

function User() {
  // 陣列中物件的樣貌:
  // ex. {"id": "107001", "name": "張佳蓉","age": "22"}
  const [users, setUsers] = useState([
    {
      id: '載入中...',
      name: '載入中...',
      age: '載入中...',
    },
  ])

  // 載入資料用
  const [isLoading, setIsLoading] = useState(false)

  const getUsers = async () => {
    const response = await axios.get(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )

    console.log(response)

    setUsers(response.data)
  }

  // didMount時與伺服器要求資料
  useEffect(() => {
    // 先開啟載入指示器
    setIsLoading(true)

    getUsers()

    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  // bootstrap
  const spinner = (
    <>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  )
  const display = (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((value, index) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.age}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )

  return (
    <>
      <h1>會員資料</h1>
      <div>{isLoading ? spinner : display}</div>
    </>
  )
}

export default User
