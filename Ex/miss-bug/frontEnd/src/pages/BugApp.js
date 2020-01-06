import React from 'react';
import { Component } from "react";
import { Link } from 'react-router-dom';

import bugService from '../services/bugService'
import userService from '../services/userService'

import BugList from '../cmps/bugs/BugList'
import Filter from '../cmps/bugs/Filter';

export default class BugApp extends Component {
    state = {
        user: null,
        bugs: [],
        filterBy: { title: '' },
        page: 1
    }

    componentDidMount() {
        this.loadBugs();
        const user = userService.getLoggedinUser();
        this.setState({ user });
    }

    loadBugs = () => {
        bugService.query(this.state.filterBy, this.state.page).then(bugs => {
            this.setState({ bugs: bugs })
        }).catch((err) => {
            this.props.history.push('/')
        });
    }

    onFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBugs);
    }
    onLogout = () => {
        userService.logout()
            .then(res => {
                this.props.history.push('/')
            })
    }

    onChangePage = (diff) => {
        const { page, bugs } = this.state

        if (diff == -1 && page === 1) return
        if (diff == 1 && page > 1 && !bugs.length) return
        this.setState(prevstate => ({ page: prevstate.page += parseInt(diff) }), this.loadBugs)
    }

    render() {
        const { userName, _id, isAdmin } = (this.state.user) ? this.state.user : '';
        return (
            <section className="bug-app container">
                <h2>Hello {userName}</h2>
                <div className="control-container flex space-between">
                    <div>
                        <button onClick={this.onLogout}>Logout</button>
                        <Link to={`/user/${_id}`}><button>Profile</button></Link>

                        {(this.state.user && isAdmin) ?
                            <Link to={`/user/`} ><button>Users List</button></Link> : ''
                        }
                    </div>
                    <Filter onFilter={this.onFilter}></Filter>
                </div>
                <h2>Bugs</h2>
                <BugList onChangePage={this.onChangePage} user={this.state.user} bugs={this.state.bugs} ></BugList>
            </section>
        )
    }
}