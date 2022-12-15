function Child({ text = '', color = 'BLACK', price = 0 }) {
  // 解構寫法也可直接以參數帶入, 並且先給預設值的作法好處較多
  //   const { text, color, price } = props /* 改用解構寫法 */
  return (
    <>
      <h1>Child</h1>
      {/* <p>{props.text}</p> */}
      {/* <p>{props.color}</p> */}
      {/* <p>{props.price}</p> */}
      <p>{text}</p> {/* 改用解構寫法 */}
      <p>{color}</p>
      <p>{price}</p>
    </>
  )
}

export default Child
