import React, { Component } from 'react'
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList';

export default class todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            list: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleChange(e) {
        this.setState({
            ...this.state,
            description: e.target.value
        })
    }
    handleAdd() {

    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleChange}
                />
                <TodoList />
            </div>
        )
    }
}
