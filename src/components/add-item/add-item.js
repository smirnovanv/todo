import React from 'react';

export default class AddItem extends React.Component {

    render () {
        const { onAdded } = this.props;
        return (
            <div className="add-item">
                <button 
                    className="btn btn-outline-secondary"
                    onClick={() => onAdded('My new taks')}>
                    Add Item
                </button>
            </div>
        );
    }
}