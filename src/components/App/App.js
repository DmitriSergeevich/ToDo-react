import React from 'react';
import AddItem from '../AddItem';
import ItemStatusFilter from '../ItemStatusFilter';
import PageHeader from '../PageHeader';
import SearchInput from '../SearchInput';
import TodoList from '../TodoList';
import './App.css';

export default class App extends React.Component {

  maxId = 100;

  createItem = (text) => {
    return {
      label: text,
      id: this.maxId++,
      important: false,
      done: false
    }
  }

  state = {
    listItems: [
      this.createItem('Drink coffee'),
      this.createItem('Lerning react'),
      this.createItem('To pee'),
    ]
  };  

  deleteItem = (id) => {
    this.setState(({ listItems }) => {
      const arr = listItems.filter((item) => {
        return item.id !== id && item;
      })
      return {
        listItems: arr,
      };
    });
  };
  
  addNewItem = (text) => {
    
    this.setState(({ listItems }) => {
      let arr = [...listItems];
      arr.push(this.createItem(text))
      return {
        listItems: arr,
      }
      }
      
    )
  }
  
  updateTogleElement = (prop, id) => {
    this.setState(({ listItems }) => {
      const arr = [...listItems];
      arr.forEach(el => {
        if (el.id === id) {
          el[prop] = !el[prop]
        }
      })
      return {
        listItems: arr,
      }
    })
  }

  onToggleDone = (id) => {
    this.updateTogleElement('done', id)
  }

  onToggleImportant = (id) => {
    this.updateTogleElement('important', id)
  }

  render() {
    const doneCount = this.state.listItems.filter((el) => el.done === true && el ).length;  
    const todoCount = this.state.listItems.length - doneCount;
    return (
      <div className="todo-app">      
        <PageHeader toDo={todoCount} done={doneCount}/>
        <div className="top-panel d-flex">
          <SearchInput/>
          <ItemStatusFilter />
        </div>
        
        <TodoList todos={ this.state.listItems }
                  onDeleted={this.deleteItem }
                  onToggleDone={this.onToggleDone}
                  onToggleImportant={this.onToggleImportant}/>
        <AddItem addItems={ this.addNewItem }/>
      </div>
    )
  }

  
}