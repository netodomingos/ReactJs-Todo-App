import React, { Component } from 'react'
import Axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList';

const URL = 'http://localhost:3003/api/todos'

export default class todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            list: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.refresh()
    }
    refresh() {
        Axios.get(`${URL}?sort=-createdAt`)
            .then(res => this.setState({
                ...this.state,
                description: '',
                list: res.data
            }))
    }
    handleChange(e) {
        this.setState({
            ...this.state,
            description: e.target.value
        })
    }
    handleAdd() {
        const description = this.state.description
        Axios.post(URL, { description })
            .then(res => this.refresh())

    }
    handleRemove(todo) {
        Axios.delete(`${URL}/${todo._id}`)
            .then(res => this.refresh())
    }
    handleMarkAsDone() {
        Axios.put(`${URL}/${todo._id}`, {
            ...todo,
            done: true
        }).then(res => this.refresh())
    }
    handleMarkAsPending() {
        Axios.put(`${URL}/${todo._id}`, {
            ...todo,
            done: false
        }).then(res => this.refresh())
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
                <TodoList
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}
