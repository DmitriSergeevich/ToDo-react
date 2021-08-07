import React from 'react';
import ReactDOM from 'react-dom';
import { ItemStatusFilter } from './components/ItemStatusFilter';
import { PageHeader } from './components/PageHeader';
import { SearchInput } from './components/SearchInput';
import { TodoList } from './components/TodoList';
import './index.css';

const App = () => {
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

ReactDOM.render(<App/>, document.getElementById('root'))