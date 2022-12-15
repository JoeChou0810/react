import { useEffect, useState } from 'react'

function ChildB(props) {
  const [cData, setCData] = useState('子女B元件的內部資料')
  // 自動往父母元件傳
  // 如果當cData有變化時, 會執行props.setDataFromChild
  useEffect(() => {
    props.setdataFromChild(cData)
  }, [cData])

  return (
    <>
      <h1>Child B</h1>
      <button
        onClick={() => {
          setCData('9999')
        }}
      >
        cData change to 9999
      </button>
      <button
        onClick={() => {
          setCData('abcd')
        }}
      >
        cData change to abcd
      </button>
      {/* 手動觸發 */}
      {/* <button
        onClick={() => {
          props.setdataFromChild(cData)
        }}
      >
        CallBackPData
      </button> */}
    </>
  )
}

export default ChildB
