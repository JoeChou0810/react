import Child from './Child'

function Parents() {
  return (
    <>
      <Child text="今天開始學React" color="red" price={1234} />
      <Child />
    </>
  )
}

export default Parents
