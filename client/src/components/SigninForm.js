import React, { Component } from 'react';

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
            this.props.history.push('/events');
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

export default SigninForm;