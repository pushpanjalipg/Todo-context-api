import React, { useContext, useEffect, useState } from 'react'
import store from '../store/store'
export default function Input() {
  let { addTodo, editData, updateTodo } = useContext(store);
  let [todo, setTodo] = useState('')
  let [error, setError] = useState(false)
  const inputChange = (event) => {
    setTodo(event.target.value)
    if (event.target.value.length > 0) {
      setError(false)
    } else {
      setError(true)
    }
  }
  const submit = (event) => {
    event.preventDefault();
    if (todo.length > 0) {
      if (editData.index !== -1) {
        updateTodo(editData.index, todo)
      } else {
        addTodo(todo);
      }
      setTodo('')
    } else {
      setError(true)
    }
  }
  useEffect(() => {
    setTodo(editData.data)
  }, [editData.index])
  return (
    <div>
      <form className="row" onSubmit={submit}>
        <div className="col-10">
          <input type="text"
            className="form-control"
            value={todo}
            onChange={inputChange}
            placeholder='enter todo' />
          {
            error && <p className='text-danger'>Enter todo</p>
          }
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary">
            {
              editData.index === -1 ? "Add" : "Update"
            }
          </button>
        </div>
      </form>
    </div>
  )
}
