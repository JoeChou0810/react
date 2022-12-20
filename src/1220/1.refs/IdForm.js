function IdForm(props) {
  // App.js中 重複的元件 如果以id控制 只會觸發最先寫入的元件, **試試按鈕
  return (
    <>
      <h1>IdForm</h1>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          document.getElementById('my-input').focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          document.getElementById('my-input').blur()
        }}
      >
        失焦(blur)
      </button>
      <button
        onClick={() => {
          console.log(document.getElementById('my-input').value)
        }}
      >
        印出
      </button>
    </>
  )
}

export default IdForm
