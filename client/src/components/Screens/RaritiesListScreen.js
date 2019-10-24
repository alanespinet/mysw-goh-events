import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getRaritiesQuery as query } from '../../queries';
import Rarity from '../Singles/Rarity';
import AddRarity from '../AddRarity';

class RaritiesListScreen extends Component {
    render(){
        return (
            <div className="raritiesList">
                <h1>Rarities</h1>
                <AddRarity />

                <div className="tagList__list">
                    { !this.props.data.loading && this.props.data.rarities.map(rarity => {
                        return <Rarity id={ rarity.id } key={ rarity.id } level={ rarity.level } requiredShards={ rarity.requiredShards } />;
                    }) }
                </div>
            </div>
        );
    }
}

export default graphql(query)(RaritiesListScreen);