import React from 'react';
import Button from './Button';

// Components
import Input from "./Input";

class Form extends React.Component {
    state = {
        'email': '',
        'password': '',
        'confirmPassword': '',
        'enabled': false
    }

    changeInputValue = (input, value) => {
        this.setState({ [input]: value})
    }

    componentDidUpdate() {
        this.checkForm();
    }

    checkForm = () => {
        if (this.state.password.length > 3
            && this.state.password === this.state.confirmPassword
            && this.state.email.match(/^[a-z0-9]+(\.[a-z0-9]+)*@[a-z]+\.[a-z]+/)) {
                !this.state.enabled && this.setState({ enabled: true})
            } else if (this.state.enabled) {
                this.setState({ enabled: false})
            }
    }

    submitForm = (evt) => {
        console.log(this.state);
    }

    render () {
        return (
            <form onSubmit={(evt) => {
                evt.preventDefault();
                this.submitForm();
                }}>
                <Input
                    type='email'
                    inputName='email'
                    id='email'
                    label='Email'
                    value={this.state.email}
                    changeInputValue={this.changeInputValue}
                ></Input>
                <Input
                    type='password'
                    inputName='password'
                    id='password'
                    label='Mot de passe'
                    value={this.state.password}
                    changeInputValue={this.changeInputValue}
                ></Input>
                <Input
                    type='password'
                    inputName='confirmPassword'
                    id='confirmPassword'
                    label='Confirmer le mot de passe'
                    value={this.state.confirmPassword}
                    changeInputValue={this.changeInputValue}
                ></Input>
                <Button enabled={this.state.enabled}></Button>
            </form>
        )
    }
}

export default Form;