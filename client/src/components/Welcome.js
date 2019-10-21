import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
    <div className="welcome">
        <div className="welcome__content">
            <p>Welcome back. You can access to your planning Screen, if you like</p>
            <Link to="/events">Events</Link>
        </div>
    </div>
);

export default Welcome;