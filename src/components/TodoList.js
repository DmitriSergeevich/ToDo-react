import React from 'react';
import './TodoList.css'
import { ToDoListItem } from './ToDoListItem';
export const TodoList = ({ todos }) => {  
  const elements = todos.map(elem => {
    const {id, ...elemProp} = elem;
    return <li key={ id } className="list-group-item"> < ToDoListItem { ...elemProp }/></li>;
  })
  return <ul className="list-group todo-list"> { elements } </ul>;
}
