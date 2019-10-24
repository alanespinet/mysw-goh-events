import React from 'react';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Main from './Layout/Main';
import RaritiesListScreen from './Screens/RaritiesListScreen';

const Tags = props => {   
    return (
        <div className="home">
        <Header />
        <Main expanded="expanded">
            <RaritiesListScreen history={props.history} />
        </Main>
        <Footer />
        </div>
    );
}

export default Tags;