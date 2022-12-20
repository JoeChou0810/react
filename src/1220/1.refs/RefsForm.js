import { useRef } from 'react'

function RefsForm(props) {
  // refs 可以保持元件的重複利用性
  const inputRef = useRef(null)
  return (
    <>
      <h1>RefsForm</h1>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        失焦(blur)
      </button>
      <button
        onClick={() => {
          console.log(inputRef.current)
          console.log(inputRef.current.value)
        }}
      >
        印出
      </button>
    </>
  )
}

export default RefsForm
