import React, { useContext } from 'react'
import store from '../store/store'

export default function List() {
  let { todos, deleteTodo, editTodo } = useContext(store)
  return (
    <div>
      <ul className="list-group">
        {
          todos.length > 0 ? todos.map((todo, index) => (
            <li className="list-group-item d-flex justify-content-between" key={index}>
              <div>{todo}</div>
              <div>
                <button className='btn btn-warning mx-2' onClick={() => editTodo(index, todo)}>Edit</button>
                <button className='btn btn-danger' onClick={() => deleteTodo(todo)}>delete</button>
              </div>

            </li>
          )) : <li className="list-group-item">No Todo</li>

        }
      </ul>
    </div>
  )
}
