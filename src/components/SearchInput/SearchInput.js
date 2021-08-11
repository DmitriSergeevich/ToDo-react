import React from 'react';
import './SearchInput.css'



export default class SearchInput extends React.Component {
  
  state = {
    term: '',
  }

  onChange = (e) => {
    const term = e.target.value;
    this.setState({ term })
    this.props.toSearch(term)
  }

  render() {
    return (<input type="text"
              className="form-control search-input"
              placeholder="type to search"
              value={this.state.term}
              onChange={ this.onChange } />)
  };
};