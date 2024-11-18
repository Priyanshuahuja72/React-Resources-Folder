import React, { useEffect } from 'react'

const Compound1 = ({count}) => {
  //case 1 When count value changes the component should update
  // useEffect(() => {
  //     console.log(`component updated ${count}`)
  // }, [count])

  //case 2 component update when component render first time 
  // useEffect(() => {
  //   console.log("component updated...")
  // }, [])

  //case 3 component update every time 
  useEffect(() => {
  
  })
  return (
    <div>{count}</div>
  )
}

export default Compound1;