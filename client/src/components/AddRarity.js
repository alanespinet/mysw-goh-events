import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { FaPlusCircle } from 'react-icons/fa';
import { getRaritiesQuery } from '../queries';

class AddRarity extends Component {
    state = {
        level: 0,
        requiredShards: 0,
        formVisible: ''
    }

    onShowAddForm = event => {
        event.preventDefault();
        this.setState({
            formVisible: 'visible'
        });
    }

    onHideAddForm = event => {
        event.preventDefault();
        this.setState({
            level: 0,
            requiredShards: 0,
            formVisible: ''
        });
    }

    onLevelChange = event => {
        this.setState({
            level: event.target.value
        });
    }

    onRequiredShardsChange = event => {
        this.setState({
            requiredShards: event.target.value
        });
    }

    onAddRarity = event => {
        event.preventDefault();

        if(this.state.level !== '' && this.state.level > 0 && this.state.requiredShards !== '' && this.state.requiredShards > 0){
            this.props.mutate({
                variables: {
                    level: parseInt(this.state.level),
                    requiredShards: parseInt(this.state.requiredShards)
                },
                refetchQueries: [{ query: getRaritiesQuery }]
            }).then(res => {
                this.setState({
                    level: 0,
                    requiredShards: 0,
                    formVisible: ''
                }); 
            });
        } else {
            alert('ERROR: The field "name" MUST have a value');
        }
    }

    render(){
        return (
            <div className="addTag addRarity">
                <div className="addTag__add-button">
                    <button onClick={this.onShowAddForm}>Add Rarity <FaPlusCircle /></button>
                </div>

                <form className={`addTag__form ${this.state.formVisible}`}>
                    <div className="addTag__form-fields">
                        <label htmlFor="addTag-name-field">Level:</label>
                        <input type="number" id="addTag-level-field" onChange={this.onLevelChange} value={ this.state.level } />

                        <label htmlFor="addTag-name-field" className="second-label">Required Shards:</label>
                        <input type="number" id="addTag-level-shards" onChange={this.onRequiredShardsChange} value={ this.state.requiredShards } />
                    </div>

                    <div className="addTag__form__buttons-wrapper">
                        <button type="button" onClick={this.onAddRarity} className="addTag-confirmAddButton">Add Rarity</button>
                        <button type="button" onClick={this.onHideAddForm}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

const AddRarityMutation = gql`
    mutation AddRarityMutation($level: Int!, $requiredShards: Int!){
        addRarity(level: $level, requiredShards: $requiredShards){
            id
            level
            requiredShards
        }
    }
`;

export default graphql(AddRarityMutation)(AddRarity);