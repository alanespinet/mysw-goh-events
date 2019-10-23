import React from 'react';

const Main = props => {
    return (
        <main className={`main ${ props.expanded ? 'expanded' : '' }`}>
            <div className="container main__container">
                { props.children }
            </div>
        </main>
    );
};

export default Main;