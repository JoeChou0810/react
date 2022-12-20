import { useState } from 'react'

// import CC from './CC'
import FC from './FC'

function Main(props) {
  const [show, setShow] = useState(true)
  return (
    <>
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? '移除' : '呈現'}
      </button>
      {/* {show && <CC />} */}
      {show && <FC />}
    </>
  )
}

export default Main
