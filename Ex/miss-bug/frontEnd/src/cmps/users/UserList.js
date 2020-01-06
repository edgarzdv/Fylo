import React from 'react';
import UserPreview from "./UserPreview.js";

export default function UserList(props) {
    return props.users ? <ul className="user-list container">{props.users.map((user, i) => <UserPreview onDelete={props.onDelete} key={i} index={i} user={user}></UserPreview>)}</ul> : ''
}