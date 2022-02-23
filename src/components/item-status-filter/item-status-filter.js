import React from 'react';

import './item-status-filter.css';

class ItemStatusFilter extends React.Component {
  render() {
    const {filterChange, filter} = this.props;

    return (
      <div className="btn-group">
        <button type="button"
              className={`btn${filter === 'all' ? ' btn-info' : ' btn-outline-secondary'}`}
                onClick={() => filterChange('all')}>All</button>
        <button type="button"
                className={`btn${filter === 'active' ? ' btn-info' : ' btn-outline-secondary'}`}
                onClick={() => filterChange('active')}>Active</button>
        <button type="button"
                className={`btn${filter === 'done' ? ' btn-info' : ' btn-outline-secondary'}`}
                onClick={() => filterChange('done')}>Done</button>
      </div>
    );
  }
}

export default ItemStatusFilter;