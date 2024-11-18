import React, { useCallback, useState, memo } from 'react'
import Todos from './Todos'
import Count from './Count'

const Callback = () => {
    
    const [todos, setTodos] = useState([]);

    const addTodos = useCallback(() => {
        setTodos((prevTodos) => [...prevTodos, `new Entry`]);
    }, [todos]);

  return (
    <div>
        <Todos todoList = {todos} addTodos = {addTodos}/>
        <Count/>
    </div>
  )
}

export default memo(Callback);