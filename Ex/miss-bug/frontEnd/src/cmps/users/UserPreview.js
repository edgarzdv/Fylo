import React from 'react';
import { Component } from "react";
import { Link } from 'react-router-dom';


export default class UserPreview extends Component {

    onDelete = () => {
        this.props.onDelete(this.props.user._id)
    }

    render() {
        const { user,index } = this.props;
        return <li  className={`list-item flex ${(index % 2 === 0) ? 'line-color' : ''} `}>
            <Link to={`/user/${user._id}`}> <h2 className="user-name">{user.userName}</h2>  </Link>
            <button onClick={this.onDelete}>Delete</button>
        </li>
    }
}