import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';

import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { getRaritiesQuery } from '../../queries';

class Rarity extends Component {
    onDeleteRarity = event => {
        event.preventDefault();
        this.props.DeleteRarityMutation({
            variables: {
                id: this.props.id
            },
            refetchQueries: [{ query: getRaritiesQuery }]
        }).then(res => {
            alert('SUCCESS: Deleting process Complete');
        });
    }

    onEditRarity = event => {
        event.preventDefault();

        const valueLevel = document.querySelector(`#tag__edit_id_${this.props.id} #rarity_level`).value;
        const valueShards = document.querySelector(`#tag__edit_id_${this.props.id} #rarity_shards`).value;
        
        if( valueLevel !== '' && valueLevel > 0 && valueShards !== '' && valueShards > 0 ){
            this.props.EditRarityMutation({
                variables: {
                    id: this.props.id,
                    level: parseInt(valueLevel),
                    requiredShards: parseInt(valueShards)
                },
                    refetchQueries: [{ query: getRaritiesQuery }]
                }).then(res => {
                    alert('SUCCESS: Editing process Complete');
                    this.clearAllEdits();
                });
        } else {
            alert('ERROR: New name SHOULD have a value');
        } 
    }

    onEnableEdit = event => {
        event.preventDefault();
        this.clearAllEdits();

        document.getElementById(`tag__edit_id_${this.props.id}`).classList.add('visible');
    }

    clearAllEdits = () => {
        const edits = document.querySelectorAll('.tag__edit');
        for( let i = 0; i < edits.length; i++ ){
            edits[i].classList.remove('visible');
        }
    }

    render(){
        const { level, requiredShards } = this.props;

        const jsxStars = [];
        for( let i = 0; i < level; i++ ){
            jsxStars.push(<FaStar key={`star_${i}`} />);
        }
        
        return (
            <div className="tag">
                <div className="tag__info">
                    <p className="tag__name"><span className="tag__info__stars">{ jsxStars }</span> | { requiredShards }</p>
                    
                    <button className="tag__action delete-button" onClick={this.onDeleteRarity}><FaTrashAlt /></button>
                    <button className="tag__action" onClick={this.onEnableEdit}><FaEdit /></button>
                </div>
            
                <div className={'tag__edit'} id={`tag__edit_id_${this.props.id}`}>
                    <input type="number" id="rarity_level" />
                    <input type="number" id="rarity_shards" />

                    <button className="tag__edit__confirm" onClick={this.onEditRarity}>OK</button>
                </div>
            </div>
        );
    }
}

const DeleteRarityMutation = gql`
    mutation DeleteRarity($id: String!){
        deleteRarity(id: $id){
            id
            level
            requiredShards
        }
    }
`;

const EditRarityMutation = gql`
    mutation EditRarity($id: String!, $level: Int!, $requiredShards: Int!){
        editRarity(id: $id, level: $level, requiredShards: $requiredShards){
            id
            level
            requiredShards
        }
    }
`;

export default compose(
    graphql(DeleteRarityMutation, { name: 'DeleteRarityMutation' }),
    graphql(EditRarityMutation, { name: 'EditRarityMutation' })
)(Rarity);