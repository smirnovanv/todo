import React from 'react';
import './search-panel.css';

const SearchPanel = ({searchChange}) => {
    return <input type="text"
      className="form-control search-input"
      placeholder="type to search"
      onChange={(e) => {
        return searchChange(e.target.value)
      }}
     />;
  };

export default SearchPanel;