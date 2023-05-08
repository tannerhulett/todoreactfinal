import React from 'react'
import ToDoForm from './ToDoForm'

export default function ToDoCreate(props) {
  return (
    <article className="createToDo m-2 text-white justify-content-center">
        <ToDoForm getToDos={props.getToDos} setShowCreate={props.setShowCreate} />
    </article>
  )
}
