import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const defaultState = {
    username: '',
    password: ''
};

class SigninForm extends Component {
    constructor( props ){
        super(props);
        this.state = defaultState;
    }

    onValueChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onButtonClick = event => {
        event.preventDefault();
        if( !this.validateForm() ){
            alert('Username and Password both MUST have values');
            return false;
        } else {
            this.props.mutate({
                variables: {
                    username: this.state.username,
                    password: this.state.password
                }
            }).then(res => {
                const { data } = res;
                if( data && data.doSignin && data.doSignin !== "error"){
                    localStorage.setItem('swep_atoken', data.doSignin);
                    window.location.reload();
                } else {
                    alert('Your login info seems to be incorrect.');
                }
            });
            // this.props.history.push('/events');
        }
    }

    validateForm = () => {
        return Boolean(this.state.username 
                && this.state.username !== '' 
                && this.state.password 
                && this.state.password !== '');
    }

    render(){
        return (
            <div className="signin-form-wrapper">
                <div>
                    <form id="signin-form">                        
                        <div className="form-row">
                            <label htmlFor="username">Username *:</label>
                            <input type="text" required name="username" id="username" value={ this.state.username } onChange={ this.onValueChange } />
                        </div>

                        <div className="form-row">
                            <label htmlFor="password">Password *:</label>
                            <input type="password" required name="password" id="password" value={ this.state.password } onChange={ this.onValueChange } />
                        </div>

                        <div className="form-row">
                            <button type="button" id="btnSignin" onClick={ this.onButtonClick }>Signin</button>
                        </div>
                        
                        <p className="signin-form__text signin-form__note"><sup>***</sup>This app is exclusively for its owner's use. Not signup allowed.</p>
                    </form>
                </div>
            </div>
        );
    }
}

const mutation = gql`
    mutation doSignin($username: String!, $password: String!) {
        doSignin(username: $username, password: $password)
    }
`;

export default graphql(mutation)(SigninForm);