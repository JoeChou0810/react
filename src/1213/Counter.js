import { useState } from 'react'

function Counter() {
  // [getter, setter]
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1
        onClick={() => {
          console.log('total變化-前', total)
          const newTotal = total + 1
          setTotal(newTotal)
          console.log('total變化-後', newTotal)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default Counter
