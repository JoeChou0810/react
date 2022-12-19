import { useState } from 'react'

function HTML5form() {
  const [inputText, setInputText] = useState('')
  const [textAreaText, setTextAreaText] = useState('')

  // radio group
  // ex.性別選項 : 男, 女, 不提供
  const [gender, setGender] = useState('')
  const genderOption = ['男', '女', '不提供']

  // select
  const [pet, setPet] = useState('')
  const petOptions = ['狗', '貓', '狐狸']

  // single checkbox
  const [agree, setAgree] = useState(false)

  // checkbox group
  const [likeList, setLikeList] = useState(['Mango']) // 使用陣列放入勾選的值
  const fruitOptions = ['Mango', 'Apple', 'Banana', 'Grape']

  return (
    <>
      <h1>表單元素範例</h1>
      <section id="input-text">
        <h2>文字輸入框(input-text)</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="input-text">
        <h2>文字輸入區域(text-area)</h2>
        <textarea
          value={textAreaText}
          onChange={(e) => {
            setTextAreaText(e.target.value)
          }}
        />
      </section>
      <section id="radio-button">
        <h2>選項按鈕(input-radio)</h2>
        {genderOption.map((v, i) => {
          return (
            <div
              // 選項在應用程式執行過程中完全不會更動, 可以用 i (索引值) 當 key
              key={i}
            >
              <input
                type="radio"
                checked={gender === v}
                value={v}
                onChange={(e) => {
                  setGender(e.target.value)
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </section>
      <section id="select">
        <h2>喔吼</h2>
        <select
          value={pet}
          onChange={(e) => {
            setPet(e.target.value)
          }}
        >
          <option value="">-Select Me-</option>
          {petOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
      </section>
      <section id="single-checkbox">
        <h2>Single checkbox</h2>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked)
          }}
        />
        <label>我已閱讀條款,並同意</label>
      </section>
      <section id="checkbox-group">
        <h2>Fruit Like List</h2>
        {fruitOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                checked={likeList.includes(v)}
                value={v}
                //
                // 對應到狀態改變 [ 把水果(v) 加入(勾選)陣列 或 移出(取消勾選)陣列 ]
                onChange={(e) => {
                  // 先判斷目前的v值是否在state陣列( useState([]) )中
                  const value = e.target.value
                  // if
                  if (likeList.includes(v)) {
                    const newLikeList = likeList.filter((v2, i2) => {
                      return v2 !== value
                    })

                    setLikeList(newLikeList)
                  } else {
                    const newLikeList = [...likeList, value]
                    setLikeList(newLikeList)
                  }
                  // else
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default HTML5form
