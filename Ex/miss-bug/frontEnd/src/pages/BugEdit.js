import React from 'react';
import { Component } from "react";

import BugForm from "../cmps/bugs/BugForm.js";
import bugService from "../services/bugService.js";

export default class BugEdit extends Component {
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
        bugService.getBugById(this.props.match.params.id).then(bug => {
            this.setState({ bug: bug })
        })
    }


    onEditBug = (title, description, severity) => {
        return bugService.editBug(this.state.bug._id, title, description, severity).then(bug => {
            this.props.history.push('/bug/' + bug._id);
        })
    }


    render() {
        return <BugForm bug={this.state.bug} onSave={this.onEditBug}></BugForm>
    }
} 