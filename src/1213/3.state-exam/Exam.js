import { useState } from 'react'
import './Exam2.css'

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

function Exam2() {
  // 與呈現有關必需先成為state
  const [data, setData] = useState(objArray)

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          const index = data.findIndex((v, i) => {
            return v.id === 99
          })
          //   有找到id=99的物件值時,就不在加入新的物件(所以 return)
          if (index > -1) return
          // 先寫出要新增的物件值

          const newObj = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data]

          //3
          setData(newData)
        }}
      >
        列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const newData = [...data, newObj]

          //3
          setData(newData)
        }}
      >
        列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 先寫出要新增的物件值
          // 用時間日期物件的微秒值
          const newObj = { id: +new Date(), text: 'xxx' }

          //1 //2
          const newData = [newObj, ...data]

          //3
          setData(newData)
        }}
      >
        列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // 先寫出要新增的物件值
          // 用時間日期物件的微秒值
          const newObj = { id: +new Date(), text: 'yyy' }

          //1 //2
          const newData = [...data, newObj]

          //3
          setData(newData)
        }}
      >
        列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          // 1,2
          const newData = data.filter((v, i) => {
            return v.text.includes('a')
          })
          // 3
          setData(newData)
        }}
      >
        尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          // 1,2
          const newData = data.filter((v, i) => {
            return v.text !== 'b'
          })
          // 3
          setData(newData)
        }}
      >
        刪除文字為b的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 1,2
          const newData = data.filter((v, i) => {
            return v.id !== 4
          })
          // 3
          setData(newData)
        }}
      >
        刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 建立要插入的物件
          const newObj = { id: 5, text: 'bbb' }
          // 尋找 id = 2 的物件索引
          const index = data.findIndex((v, i) => {
            return v.id === 2
          })
          if (index > -1) {
            // 如果有找到, 在索引位置處分割成兩個子陣列(.slice())
            // [1,2,3,4] => [1,2],[3,4]
            // .slice(0, index+1)
            const aa = data.slice(0, index + 1)
            const ab = data.slice(index + 1) // 從索引值 0 開始 不包含 index , +1 代表範圍到 index下一個
            // 插入新物件, 合併成新的陣列
            const newData = [...aa, newObj, ...ab]
            // 設定回原狀態
            setData(newData)
          }
        }}
      >
        在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      <button onClick={() => {}}>取代id為3的文字為cccc</button>
    </>
  )
}

export default Exam2
