import React, { Component } from 'react';
import SigninForm from './SigninForm';
import Welcome from './Welcome';

class Signin extends Component {
    render(){
        const token = localStorage.getItem('swep_atoken');
        
        return (
            <>
                { !token ? (<SigninForm history={this.props.history} />):(<Welcome />) }
            </>
        );
    }
}

export default Signin;