import React from 'react';
import ItemStatusFilter from '../ItemStatusFilter';
import PageHeader from '../PageHeader';
import SearchInput from '../SearchInput';
import TodoList from '../TodoList';
import './App.css';

export const App = () => {
  const listItems = [
    { label: 'Drink coffee', important: false, id: 1 },
    { label: 'Lerning react', important: true, id: 2 },
    { label: 'To pee', important: false, id: 3 }
  ]
  return (
    <div className="todo-app">      
      <PageHeader toDo={1} done={3}/>
      <div className="top-panel d-flex">
      <SearchInput/>
      <ItemStatusFilter />
      </div>
      
      <TodoList todos={ listItems }/>
    </div>
  )
}