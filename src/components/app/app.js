import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { nanoid } from 'nanoid';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

import './app.css';
import AddItem from '../add-item';

class App extends Component {

    constructor () {
        super();
        this.state = {
            todoData: [
                this.createTodoItem('Drink Coffee'),
                this.createTodoItem('Make Awesome App'),
                this.createTodoItem('Have lunch')
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

        this.addItem = (text) => {
            this.setState(
                ({todoData}) => {
                    let newData = todoData.slice();

                    let newTask = this.createTodoItem(text);

                    newData.push(newTask);

                    return {
                        todoData: newData
                    };
                }
            )
        }

        this.onToggleDone = (id) => {
            this.setState(({ todoData }) => {
                return {
                    todoData: this.toggleProperty(todoData, id, 'done')
                };
            });
        }

        this.onToggleImportant = (id) => {
            this.setState(({ todoData }) => {
                return {
                    todoData: this.toggleProperty(todoData, id, 'important')
                };
            });
        }
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: nanoid()
        }
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
                const oldItem = arr[idx];
                const newItem = { ...oldItem, [propName]: !oldItem[propName] };

                const newArray = [
                    ...arr.slice(0, idx),
                    newItem,
                    ...arr.slice(idx + 1)
                ];

                return newArray;
    }

    render () {
        const { todoData } = this.state;

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList 
                    todos={ todoData } 
                    onDeleted={ this.deleteItem }
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                    />
                <AddItem onItemAdded={ (text) => this.addItem(text)} />
            </div>
          );
    }
};

export default App;