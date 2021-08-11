import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
  
  state = {
    buttonsStyle : {
      All: 'btn btn-info',
      Active: 'btn outline-secondary',
      Done: 'btn outline-secondary'
    }
  }

  filterButtonHandler = (e) => {
    const curButton = e.target.innerHTML; 
    this.setState(({ buttonsStyle }) => {           
      const newButtonsStyle = {...buttonsStyle};      
      for (const key in newButtonsStyle) {
        newButtonsStyle[key] = 'btn outline-secondary';
      }
      newButtonsStyle[curButton] = 'btn btn-info';
      return {
        buttonsStyle: newButtonsStyle,
      } 
    })
    const { changeFilterProp } = this.props;
    changeFilterProp(curButton);
  }

  render() {

    return (
      <div className="btn-group">
        <button type="button" className={this.state.buttonsStyle.All}
                              onClick={this.filterButtonHandler}>All</button>
        <button type="button" className={this.state.buttonsStyle.Active}
                              onClick={this.filterButtonHandler}>Active</button>
        <button type="button" className={this.state.buttonsStyle.Done}
                              onClick={this.filterButtonHandler}>Done</button>
      </div>
    );
  }
}