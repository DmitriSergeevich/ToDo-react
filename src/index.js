import React from 'react';
import ReactDOM from 'react-dom';
import { PageHeader } from './components/PageHeader';
import { SearchInput } from './components/SearchInput';
import { TodoList } from './components/TodoList';

const App = () => {  
  return (
    <div>      
      <PageHeader/>
      <SearchInput/>
      <TodoList/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))