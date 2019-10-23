import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu';

class Header extends Component {
    state = {
        menuOpen: false
    };

    onToggleMenu = event => {
        event.preventDefault();
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen
        }));
    }

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

                        <div className={`header__menu ${ this.state.menuOpen ? 'open' : '' }`}>
                            <Menu />
                        </div>

                        <button className="header__toggler" onClick={ this.onToggleMenu }><img className="img-fluid" src="/images/menu-bars.png" alt="" /></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;