import React from 'react';
import { Component } from "react";

import userService from '../services/userService.js'
import UserList from '../cmps/users/UserList.js'

export default class UserPage extends Component {
    state = { users: null }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        userService.query().then(users => {
            this.setState({ users: users })

        }).catch((err) => {
            this.props.history.push('/')
        });
    }

    onDelete = (userId) => {
        userService.deleteUser(userId).then(() => {
            this.loadUsers()
        });
    }


    render() {
        return (
            <section>
                <h2>Users</h2>
                <UserList onDelete={this.onDelete} users={this.state.users} ></UserList>
            </section>
        )
    }
}