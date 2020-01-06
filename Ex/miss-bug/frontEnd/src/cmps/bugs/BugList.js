import React from 'react';
import { Component } from "react";

import BugPreview from "./BugPreview.js";

export default class BugList extends Component {

    onChangePage = (ev) => {
        this.props.onChangePage(ev.target.dataset.value)
    }


    render() {
        return <div className="bug-list">
            <ul>{this.props.bugs.map((bug, i) => <BugPreview key={i} index={i} user={this.props.user} bug={bug}></BugPreview>)}</ul>
            <button data-value={-1} onClick={this.onChangePage}>Previous</button>
            <button data-value={1} onClick={this.onChangePage}>Next</button>
        </div>

    }
}