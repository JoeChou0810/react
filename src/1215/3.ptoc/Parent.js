import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  //   const [pData, setPData] = useState('父母元件的資料')

  // 專門要給子女B回傳資料用
  const [dataFromChild, setdataFromChild] = useState('')

  return (
    <>
      {/* <p>來自ChildB的Data: {dataFromChild}</p>
      <hr /> */}
      <ChildA dataFromChild={dataFromChild} />
      <ChildB setdataFromChild={setdataFromChild} />
    </>
  )
}

export default Parent
