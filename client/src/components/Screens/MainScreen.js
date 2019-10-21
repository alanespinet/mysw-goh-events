import React, { Component } from 'react';
import Signin from '../Signin';

class MainScreen extends Component {
    render(){        
        return (
            <div className="main-screen">
                <div className="main-screen__image main-screen__column">
                    { /* <img className="img-fluid" src="/images/reduced_starwars.png" alt="Galen Marek" /> */ }
                </div>

                <div className="main-screen__signin main-screen__column">
                    <Signin history={this.props.history} />
                </div>
            </div>
        );
    }
};

export default MainScreen;