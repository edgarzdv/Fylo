import BugService from '../services/bugService.js'
import React from 'react';

import { Link } from 'react-router-dom';

import { Component } from "react";
// const { Link } = ReactRouterDOM

export default class BugDetails extends Component {

    state = {
        bug: null
    }
    componentDidMount() {
        this.loadBug();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadBug();
        }
    }

    loadBug() {
        const { id } = this.props.match.params;

        BugService.getBugById(id).then(bug => {
            this.setState({ bug: bug })
        })
    }

    goBack = () => {
        this.props.history.push('/bug')
    }

    onDelete = () => {
        BugService.deleteBug(this.state.bug._id).then(() => {
            this.props.history.push('/bug')
        });
    }

    render() {
        if (!this.state.bug) return <div className="loading">Loading...</div>
        const { bug } = this.state;
        return (<div className="container">
            <h2>{bug.title}</h2>
            <p>{new Date(bug.createdAt).toLocaleString()}</p>
            <h2>{bug.description}</h2>
            <h2> Creator: {bug.creator.userName}</h2>

            <button onClick={this.goBack}>BACK</button>
            <button onClick={this.onDelete}>Delete</button>
            <Link to={`/bug/${bug._id}/edit`} ><button>Edit</button></Link>
        </div>
        )
    }
}