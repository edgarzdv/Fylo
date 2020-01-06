import userService from '../services/userService.js'
// const { Link } = ReactRouterDOM
// import { Link } from 'react-router-dom';
import React from 'react';
import { Component } from "react";

export default class UserDetails extends Component {

    state = {
        user: null
    }
    componentDidMount() {
        this.loadUser();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadUser();
        }
    }

    loadUser() {
        const { id } = this.props.match.params;

        userService.getUserById(id).then(user => {
            this.setState({ user: user })
        })
    }

    goBack = () => {
        this.props.history.push('/user')
    }

    onDelete = () => {
        userService.deleteuser(this.state.user._id).then(() => {
            this.props.history.push('/user')
        });
    }

    render() {
        if (!this.state.user) return <div className="loading">Loading...</div>
        const { user } = this.state;
        return (<div className="container">
            <h2>{user.userName}</h2>
            <h2> {user.isAdmin ? 'User is admin' : 'User is not admin'}</h2>
        </div>
        )
    }
}