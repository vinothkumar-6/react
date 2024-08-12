import React, {useEffect, useState} from "react";
import AddNewTodo from "./AddNewTodo";
const Todolist = () =>{
    const  [todos, setTodos] = useState(
        [{text: 'Pay Bills', id: 1},
            {text: 'Do your homeword', id : 2},
            {text: 'Work hardwxw', id: 3}
        ]
   );

    const [count, setCount] = useState(0);

    const addTodo = (text) =>{
        setTodos([
            ...todos,
            { text: text,
              id: Math.random()}
        ])
    }
    useEffect(() => {
        console.log('use effect',todos);
    }, [todos]);
    useEffect(() => {
        console.log('use effect',todos);
    }, [count]);

    return(
        <div>
            <ul>
                {todos.map((todo) =>{
                    return(
                        <li key={todo.id}>{todo.text}</li>
                    )
                })}
            </ul>
            <AddNewTodo addTodo = {addTodo}/>
            <button onClick={() => setCount(count+1)}>Score: {count}</button>
        </div>
    )
}
export default Todolist;