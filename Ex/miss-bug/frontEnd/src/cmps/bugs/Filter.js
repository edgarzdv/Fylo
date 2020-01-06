import React from 'react';
import { Component } from "react";
export default class Filter extends Component {
    state = {
        filterBy: { title: '' }
    }
    changeInput = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }))
    }

    onFilterClick = () => {
        this.props.onFilter(this.state.filterBy)
    }
    render() {
        const { title } = this.state.filterBy
        return <div>
            <input type="text" placeholder="title" value={title}
                onChange={this.changeInput} name="title"></input>
            <button onClick={this.onFilterClick}>Filter</button>
        </div>
    }
}