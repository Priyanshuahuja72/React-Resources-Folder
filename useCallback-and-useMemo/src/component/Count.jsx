import {memo, useMemo, useState} from 'react'

const Count = () => {
    console.log("count component called")
    const [count, setCount] = useState(0);

    const increament = () => {
        setCount((prev) => prev + 1);
    }
    
  return (
    <div className="count-sec">
            <div className="count-val">{count}</div>
            <div className="count-btn"><button onClick = {increament}> + </button></div>
        </div>
  )
}

export default memo(Count);