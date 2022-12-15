function JsxValue() {
  return (
    <>
      <h1>JSX中的值與表達式</h1>
      <hr />
      <h2>Number</h2>
      {123 - 99}
      {NaN}
      <h1>String</h1>
      {'abc'} <hr />
      {`total=${100 - 5}`}
      <h1>Boolean</h1>
      {/* 布林值(或邏輯比較、運算)不會被呈現 */}
      {true}
      {false}
      {1 < 0} {/* 邏輯運算? */}
      <h2>null</h2>
      {/* 不會被呈現 */}
      {null}
      <h2>undefined</h2>
      {/* 不會被呈現 */}
      {undefined}
      <h2>Array</h2>
      {[1, 2, 3, 'a']}
      <h2>Object</h2>
      {/* Objects 會造成中斷錯誤 */}
      {/* {{ a: 1, b: 2 }} */}
      <h2>Function</h2>
      {() => {}}
      {console.log()}
    </>
  )
}

export default JsxValue
