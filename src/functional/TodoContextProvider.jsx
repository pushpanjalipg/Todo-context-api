import React, { useState } from 'react'
import store from '../store/store'
import { initialState } from '../store/store'
export default function TodoContextProvider(props) {
    let [todos, setTodos] = useState(['breakfast', 'lunch', 'dinner'])
    let [editData, setEditData] = useState({
        index: -1,
        data: ""
    })
    const addTodo = (value) => {
        setTodos([...todos, value])
    }

    const deleteTodo = (value) => {
        let filteredTodos = todos.filter((todo) => todo !== value)
        setTodos(filteredTodos)
    }

    const updateTodo = (index, data) => {
        todos.splice(index, 1, data)
        setTodos([...todos])
        setEditData({
            index: -1,
            data: ""
        })
    }



    const editTodo = (index, data) => {
        setEditData({
            index,
            data
        })
        console.log(index, data);
    }
    return (
        <div>
            <store.Provider value={{
                ...initialState,
                todos,
                addTodo,
                deleteTodo,
                editTodo,
                editData,
                updateTodo
            }}>
                {
                    props.children
                }
            </store.Provider>
        </div>
    )
}
