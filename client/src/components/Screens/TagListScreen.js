import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import Tag from '../Singles/Tag';
import AddTag from '../AddTag';
import { getTagsQuery as query } from '../../queries';

class TagListScreen extends Component {
    render(){
        return (
            <div className="tagList">
                <h1>Tags</h1>
                <AddTag />

                <div className="tagList__list">
                    { !this.props.data.loading && this.props.data.tags.map(tag => {
                        return <Tag id={ tag.id } key={ tag.id } name={ tag.name } />;
                    }) }
                </div>
            </div>
        );
    }
}

export default graphql(query)(TagListScreen);