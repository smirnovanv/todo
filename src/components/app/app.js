import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

import './app.css';

class App extends Component {

    constructor () {
        super();
        this.state = {
            todoData: [
                {
                  label: 'Drink Coffee',
                  important: false,
                  id: 1
                },
                {
                  label: 'Make Awesome App',
                  important: true,
                  id: 2
                },
                {
                  label: 'Have lunch',
                  important: false,
                  id: 3
                }
              ] 
        }

        this.deleteItem = (id) => {
            this.setState(
                ({todoData}) => {
                    const idx = todoData.findIndex((el) => el.id === id);
                    let newData = todoData.slice();
                    newData.splice(idx, 1);

                    return {
                        todoData: newData
                    };
                }
            )}
    }

    render () {
        return (
            <div className="todo-app">
              <AppHeader toDo={1} done={3} />
              <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
              </div>
              <TodoList 
                todos={ this.state.todoData } 
                onDeleted={ this.deleteItem } />
            </div>
          );
    }
};

export default App;