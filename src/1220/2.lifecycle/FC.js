import { useEffect, useRef, useState } from 'react'

function FC() {
  const [total, setTotal] = useState(0)

  const didMountRef = useRef(false)
  // 模擬 didMount
  useEffect(() => {
    console.log('模擬 didMount')
  }, [])

  // 模擬 didMount + didUpdate
  // 相依性陣列中會放入與更新階段有關的 props 或 state, 意義為:當放入的 props 或 state 有更動時,會執行第一參數函式裡的程式碼
  useEffect(() => {
    console.log('模擬 didMount + didUpdate', 'total=', total)
  }, [total])
  // 相依性陣列 當放在[]裡的變數有變動時執行前方的函式

  // 只模擬 didUpdate
  // 簡易語法,判斷是否為初始直
  useEffect(() => {
    // total 為初始值時不執行
    if (total !== 0) {
      console.log('只模擬 didUpdate(判斷初始值)', 'total=', total)
    }
  }, [total])

  // 完整模擬 didUpdate
  // 利用 refs 紀錄 didUpdate 時間點
  useEffect(() => {
    if (didMountRef.current) {
      console.log('完整模擬 didUpdate ', 'total=', total)
    } else {
      didMountRef.current = true
    }
  }, [total])

  // 模擬 willUnmount, 要寫在回傳值中,回傳值也是一個函式(寫在此函式中)
  useEffect(() => {
    return () => {
      // willUnmount 寫在這裡
      console.log('模擬 willUnmount')
    }
  }, [total])

  return (
    <>
      <h1>函式型元件</h1>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default FC
