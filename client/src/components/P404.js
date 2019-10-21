import React from 'react';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Main from './Layout/Main';

const P404 = () => (
    <div className="p404">
        <Header />
        <Main>
            <h1>404: Page not Found</h1>
        </Main>
        <Footer />
    </div>
);

export default P404;