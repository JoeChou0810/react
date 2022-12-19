import React, { useState } from 'react'

function BirthSelect(props) {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')

  const [text, setText] = useState('')

  // 產生數字陣列的函式
  // ex. (1, 4) => [1, 2, 3, 4]
  const makeOptions = (min, max) => {
    const options = []
    for (let i = min; i < max + 1; i++) {
      options.push(i)
    }
    return options
  }

  return (
    <>
      <h1>下拉式選單 & 驗證</h1>
      西元:
      <select
        value={year}
        onChange={(e) => {
          setYear(e.target.value)
        }}
      >
        <option value="">請選擇年份</option>
        {/* <option value="1920">1920</option>
        <option value="1921">1921</option> */}
        {makeOptions(1911, 2022).map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>
      年
      <select
        value={month}
        onChange={(e) => {
          setMonth(e.target.value)
        }}
      >
        <option value="">請選擇月份</option>
        {/* <option value="8">8</option>
        <option value="9">9</option> */}

        {/* {makeOptions(1, 12).map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })} */}
        {Array(12)
          .fill(1)
          .map((v, i) => {
            return (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            )
          })}
      </select>
      月
      <select
        value={day}
        onChange={(e) => {
          setDay(e.target.value)
        }}
      >
        <option value="">請選擇日期</option>
        {/* <option value="10">10</option>
        <option value="11">11</option> */}
        {year !== '' &&
          month !== '' &&
          makeOptions(
            1,
            new Date(Number(year), Number(month), 0).getDate()
          ).map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
      </select>
      日
      <button
        onClick={() => {
          if (year === '' || month === '' || day === '') {
            alert('請完成填入選項')
            return
          }
          //18年的微秒值 = 18 * 365.25 * 24 * 60 * 60 * 1000 = 568036800000
          const ms18years = 568036800000
          // 使用者選了年月日後的微秒值
          const msBirth = Number(new Date(`${year}/${month}/${day}`))
          // 目前(現在)的微秒值
          const msNow = Number(new Date())

          if (msNow - msBirth >= ms18years) {
            setText('滿18歲')
          } else {
            setText('未滿18歲')
          }
        }}
      >
        年齡驗證
      </button>
      <hr />
      <h3>驗證結果 : {text} </h3>
    </>
  )
}

export default BirthSelect
