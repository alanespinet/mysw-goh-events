import React from 'react';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Main from './Layout/Main';
import TagListScreen from './Screens/TagListScreen';

const Tags = props => {   
    return (
        <div className="home">
        <Header />
        <Main expanded="expanded">
            <TagListScreen history={props.history} />
        </Main>
        <Footer />
        </div>
    );
}

export default Tags;