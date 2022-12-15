import { useState } from 'react'
import MyButton from './MyButton'

function Counter() {
  // [getter, setter]
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>{total}</h1>
      <MyButton value={1} total={total} setTotal={setTotal} />
      <MyButton value={-1} total={total} setTotal={setTotal} />
      <MyButton value={2} total={total} setTotal={setTotal} />
    </>
  )
}

export default Counter
