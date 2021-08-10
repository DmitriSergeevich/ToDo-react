import React from 'react';
import "./AddItem.css"

export default class AddItem extends React.Component {
  
  state = {
    label: '',
  }
  
  onChange = (e) => {
    this.setState({ label: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { addItems } = this.props;    
    addItems(this.state.label)
    this.setState({ label: '' })
  }
  render() {
    return (
      <form className="addItem top-panel"
            onSubmit={ this.onSubmit }>
        <input type="text"
              className="form-control search-input"
              placeholder="Type new task"
              id="add-item"
              onChange={ this.onChange }
              value={ this.state.label }>         
        </input>
        <button type="button"
          className="btn btn-info"
          onClick={ this.onSubmit }>
          Add new task
        </button>
      </form>
    )
  };
}