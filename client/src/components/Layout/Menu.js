import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Menu extends Component {
    onLogout = event => {
        event.preventDefault();
        localStorage.removeItem('swep_atoken');

        const { location, history } = this.props;
        if( location.pathname === '/' ){
            window.location.reload();
        } else {
            history.push('/');
        }
    }

    render(){
        return (
            <div className="menu-wrapper">
                { localStorage.getItem('swep_atoken') && 
                    <div className="menu">
                        <NavLink activeClassName="active" to="/events">Events</NavLink>
                        <NavLink activeClassName="active" to="/characters">Characters</NavLink>
                        <NavLink activeClassName="active" to="/ships">Ships</NavLink>
                        <NavLink activeClassName="active" to="/tags">Tags</NavLink>
                        <NavLink activeClassName="active" to="/rarities">Rarities</NavLink>
        
                        <a className="logout-link" href="/" onClick={ this.onLogout }>Logout</a>
                    </div>
                }
            </div>
            
        );
    }
} 


export default withRouter(Menu);