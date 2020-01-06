import userService from "../services/userService.js"
import React from 'react';
import { Component } from "react";
export default class SignUp extends Component {
    state = { userName: '', password: '' }

    inputChange = (ev) => {
        let fieldName = ev.target.name
        this.setState({ [fieldName]: ev.target.value })
    }

    onSignUp = (ev) => {
        ev.preventDefault();
        userService.signUp(this.state.userName, this.state.password)
            .then(user => {
                console.log('User:', user)
                this.props.history.push('/bug')
            })
            .catch(err => {
                console.log('Had Issues:', err)
            })
    }

    render() {
        const { userName, password } = this.state
        return (
            <section className="sign-up container flex justify-center">
                <form className="flex column align-center">
                    <h2>Sign Up</h2>
                    <input type="text" placeholder="name" name="userName"
                        onChange={this.inputChange} value={userName} />
                    <input type="text" placeholder="password" name="password"
                        onChange={this.inputChange} value={password} />
                    <button onClick={this.onSignUp}>Sign Up</button>
                </form>
            </section>
        )
    }
}