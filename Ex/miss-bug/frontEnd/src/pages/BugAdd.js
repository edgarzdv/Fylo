import BugForm from "../cmps/bugs/BugForm.js";
import bugService from "../services/bugService.js";
import React from 'react';
import { Component } from "react";
export default class BugAdd extends Component {

    onAddBug = (title, description, severity) => {
        return bugService.addBug(title, description, severity).then(bug => {
            this.props.history.push('/bug/' + bug._id);
        })
    }

    render() {
        return <div className="bug-add flex justify-center">
            <BugForm onSave={this.onAddBug}></BugForm>
        </div>

    }
} 