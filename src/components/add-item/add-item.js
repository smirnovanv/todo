import React from 'react';

export default class AddItem extends React.Component {
    constructor() {
        super();

        this.state = {
            label: ''
        }

        this.onLabelChange = (e) => {
            this.setState({
                label: e.target.value
            });
        }

        this.onSubmit = (e) => {
            e.preventDefault();
            this.props.onItemAdded(this.state.label);
            this.setState({
                label: ''
            });
        }
    }

    render () {
        return (
            <form className="add-item d-flex"
                onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done"
                    value={this.state.label} />
                <button 
                    className="btn btn-outline-secondary">
                    Add Item
                </button>
            </form>
        );
    }
}