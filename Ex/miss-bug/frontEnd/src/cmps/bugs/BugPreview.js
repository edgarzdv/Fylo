import React from 'react';
import { Component } from "react";
import { Link } from 'react-router-dom';

export default class BugPreview extends Component {

    render() {
        const { props } = this;
        const date = new Date(props.bug.createdAt).toLocaleTimeString()
        return <li className={`list-item flex ${(props.index % 2 === 0) ? 'line-color' : ''} `}>
            <h2>{props.index}.</h2>
            <Link to={`/bug/${props.bug._id}`}> <h2 className="bug-title">{props.bug.title}</h2></Link>
            <Link to={`/user/${props.user._id}`}> <h2 className="bug-user"> {props.user.userName}</h2></Link>
            <h2 className="bug-date">{date}</h2>
        </li >
    }
}