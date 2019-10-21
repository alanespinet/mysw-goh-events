import React from 'react';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Main from './Layout/Main';
import MainScreen from './Screens/MainScreen';

const Home = props => {   
    return (
        <div className="home">
        <Header />
        <Main>
            <MainScreen history={props.history} />
        </Main>
        <Footer />
        </div>
    );
}

export default Home;