import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  const count = useRef(0);
  //it will render the component again and again
  const [inputData, setinputData] = useState("");

  //it will be render at every dom manipulation
 useEffect(() => {
    // setCount(count + 1);
    //it is mutable variable which will not re-render the component again and again.
    count.current = count.current + 1;
 })

  return (
    <>
      <div>
        <div className="input-sec">
          <input 
          type="text"
          value={inputData}
          onChange={(e) => setinputData(e.target.value)}
          />
        </div>
        <div className="count-value">{count.current}</div>
      </div>
    </>
  )
}

export default App
