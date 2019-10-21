import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return (
            <div className="header">
                <div className="container">
                    <div className="header__content">
                        <div className="header__logo">
                            <Link to="/" aria-label="Go to Homepage">
                                <img className="img-fluid" src="/images/Logo.png" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;