function ChildA(props) {
  return (
    <>
      <h1>ChildA</h1>
      <p>來自父母元件的資料: {props.dataFromChild}</p>
    </>
  )
}

export default ChildA
