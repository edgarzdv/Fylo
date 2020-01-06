
import React from 'react';
import { Component } from "react";

export default class BugForm extends Component {
    state = {
        title: '',
        description: '',
        severity: ''
    }

    componentDidMount() {
        this.setFormDataForEdit();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.bug !== this.props.bug) {
            this.setFormDataForEdit();
        }
    }

    setFormDataForEdit() {
        const { bug: bug } = this.props;
        if (bug) {
            this.setState({ name: bug.name, imgUrl: bug.imgUrl })
        }
    }

    onSave = () => {
        this.props.onSave(this.state.title, this.state.description, this.state.severity).catch()
        this.setState({ title: '', description: '', severity: '' })
    }
    inputChange = (ev) => {
        let fieldName = ev.target.name
        this.setState({ [fieldName]: ev.target.value })
    }

    render() {
        return <div className="flex justify-center column">
            <input type="text" placeholder="title" name="title"
                onChange={this.inputChange} value={this.state.title}></input>
            <input type="text" placeholder="description" name="description"
                onChange={this.inputChange} value={this.state.description}></input>
            <input type="text" placeholder="severity" name="severity"
                onChange={this.inputChange} value={this.state.severity}></input>
            <button onClick={this.onSave}>Save</button>
        </div>
    }
}