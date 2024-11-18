import React, { useReducer } from 'react'

const Reducer = () => {
    const initialState = {
        //we can put here no of values
        count : 0
    }
    const reducer = (state, action) => {
    //   if(action.type === "INCREMENT"){
    //     return state + 1;
    //   }else if(action.type === "DECREMENT"){
    //     return state - 1;
    //   }else if(action.type === "RESET"){
    //     return (state = 0);
    //   }

    // we will use here a switch case
    switch (action.type) {
        case "INCREMENT": return {count: state.count + 1}
        case "DECREMENT": return {count: state.count - 1}
        case "RESET": return {count: 0}
        default: return state;
    }
    }
    //state = value of the state
    //dispatch = it will dispatch the action (that which type of action it is.)
    //reducer = it is function which takes two arguments state and another is action
    const[state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
       <div className="counter-value"><span>{state.count}</span></div> 
       <div className="counter-btn" style={{display: "flex", marginTop: "20px"}}>
        <div className="increment"><button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button></div>
        <div className="decrement"><button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button></div>
        <div className="reset"><button onClick={() => dispatch({type: "RESET"})}>Reset</button></div>
       </div>
    </div>
  )
}

export default Reducer