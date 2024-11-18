import {memo} from 'react'

const Todos = ({todoList, addTodos}) => {
    console.log("component render");
  return (
    <div>
        <div className="todos-heading"><h2>Todos List</h2></div>
        <div className="todos-list">
          {todoList.map((value, key) => {
            return <p key={key}>{value +  key}</p>
          })}
        </div>
        <div className="add-entry"><button onClick={addTodos}>Add Entry</button></div>
    </div>
  )
}

export default memo(Todos);