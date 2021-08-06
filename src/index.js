import React from 'react';
import ReactDOM from 'react-dom';
import { PageHeader } from './components/PageHeader';
import { SearchInput } from './components/SearchInput';
import { TodoList } from './components/TodoList';

const App = () => {
  const listItems = [
    { label: 'Drink coffee', important: false, id: 1 },
    { label: 'Lerning react', important: true, id: 2 },
    { label: 'To pee', important: false, id: 3 }
  ]
  return (
    <div>      
      <PageHeader/>
      <SearchInput/>
      <TodoList todos={ listItems }/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))