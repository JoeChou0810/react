import './Menu.css'
import { useState } from 'react'

function Menu() {
  // 1.保持資料狀態的一致性
  // 2.
  const [text, setText] = useState('')
  const menuItem = ['首頁', '關於我們', '產品']

  return (
    <>
      <ul>
        {menuItem.map((v, i) => {
          return (
            <li key={i}>
              <a
                href="#/"
                onClick={() => {
                  setText(v)
                }}
                className={text === v ? 'active' : ''}
              >
                {v}
              </a>
            </li>
          )
        })}
        {/* <li>
          <a
            href="#/"
            onClick={() => {
              setText('關於我們')
            }}
            className={text === '關於我們' ? 'active' : ''}
          >
            關於我們
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => {
              setText('產品')
            }}
            className={text === '產品' ? 'active' : ''}
          >
            產品
          </a>
        </li> */}
      </ul>
    </>
  )
}

export default Menu
