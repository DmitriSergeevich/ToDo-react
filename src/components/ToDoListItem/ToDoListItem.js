import React from 'react';

import './ToDoListItem.css'

export default class ToDoListItem extends React.Component {  
  
  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;
    
    let itemStyle = "todo-list-item";
    
    if (done) {
      itemStyle += ' done';
    }
    if (important) {
      itemStyle += ' important';
    }

    return (
      <span className={ itemStyle }>
        <span 
          className="todo-list-item-label"
          onClick={ onToggleDone }>
            { label }
          
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={ onToggleImportant }>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={ onDeleted }>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    
    );
  }
}
