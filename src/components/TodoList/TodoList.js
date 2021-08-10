import React from 'react';
import './TodoList.css'
import ToDoListItem from '../ToDoListItem';

export const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {  
  const elements = todos.map(elem => {
    const {id, ...elemProp} = elem;
    return (
    <li key={ id } className="list-group-item">
      < ToDoListItem 
        { ...elemProp }
        onDeleted={()=> onDeleted(id)}
        onToggleDone={()=> onToggleDone(id)}
        onToggleImportant={()=> onToggleImportant(id)}
      />
    </li>
    )
  })
  return <ul className="list-group todo-list"> { elements } </ul>;
}
