import { useState } from 'react'
import './HTMLValidForm.css'
// 把狀態轉成物件, 每一個欄位的值為該物件的'屬性'
function HTMLValidForm() {
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
  })

  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    password: '',
    email: '',
  })

  const handleFieldChange = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value }

    setUser(newUser)
  }

  const handleSubmit = (e) => {
    // 表單送出時的驗證(擋住表單預設的送出行為)
    e.preventDefault()

    // 取得值的方式
    // 1.有綁定到state中時, 直接用state中的值
    console.log(user)

    // 2.送出時才得到表單中各項填入的值, 用FormData
    const formData = new FormData(e.target)
    console.log(
      formData.get('username'),
      formData.get('password'),
      formData.get('email')
    )
    // 作其他驗證
    // 送到伺服器
  }

  const handleFormInvalid = (e) => {
    // 擋住預設訊息-泡泡錯誤訊息
    e.preventDefault()

    // 記錄錯誤訊息
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    })
  }

  // 當使用者回頭修正欄位時，要把表單的錯誤訊息先清空
  const handleFormChange = (e) => {
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    })
  }

  return (
    <>
      <h1>表單驗證</h1>
      <form
        onSubmit={handleSubmit}
        onInvalid={handleFormInvalid}
        onChange={handleFormChange}
      >
        <label>帳號</label>
        <input
          name="username"
          type="text"
          value={user.username}
          onChange={handleFieldChange}
          required
          minLength={5}
          maxLength={20}
        />
        <span className="error">{fieldErrors.username}</span>
        {/* 共用 onChange的 callback */}
        <br />
        <label>密碼</label>
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={handleFieldChange}
          required
          minLength={6}
          maxLength={10}
        />
        <span className="error">{fieldErrors.password}</span>
        <br />
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={user.email}
          onChange={handleFieldChange}
          required
        />
        <span className="error">{fieldErrors.email}</span>
        <br />
        <button type="submit">Send</button>
      </form>
    </>
  )
}

export default HTMLValidForm
