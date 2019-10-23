// Tag showed during the loop in TagList. This is NOT the single page Tag
import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';

import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { getTagsQuery } from '../../queries';

class Tag extends Component {
    onDeleteTag = event => {
        event.preventDefault();
        this.props.DeleteTagMutation({
            variables: {
                id: this.props.id
            },
            refetchQueries: [{ query: getTagsQuery }]
        }).then(res => {
            alert('SUCCESS: Deleting process Complete');
        });
    }

    onEditTag = event => {
        event.preventDefault();

        const value = document.querySelector(`#tag__edit_id_${this.props.id} input`).value;
        if( value !== '' ){
            this.props.EditTagMutation({
                variables: {
                    id: this.props.id,
                    name: value
                },
                    refetchQueries: [{ query: getTagsQuery }]
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
        document.querySelector(`#tag__edit_id_${this.props.id} input`).focus();
        document.querySelector(`#tag__edit_id_${this.props.id} input`).value = this.props.name;
        document.querySelector(`#tag__edit_id_${this.props.id} input`).select();
    }

    clearAllEdits = () => {
        const edits = document.querySelectorAll('.tag__edit');
        for( let i = 0; i < edits.length; i++ ){
            edits[i].classList.remove('visible');
        }
    }

    render(){
        const { name } = this.props;
        
        return (
            <div className="tag">
                <div className="tag__info">
                    <p className="tag__name">{ name }</p>
                    
                    <button className="tag__action delete-button" onClick={this.onDeleteTag}><FaTrashAlt /></button>
                    <button className="tag__action" onClick={this.onEnableEdit}><FaEdit /></button>
                </div>
            
                <div className={'tag__edit'} id={`tag__edit_id_${this.props.id}`}>
                    <input type="text" id="tag_name" />
                    <button className="tag__edit__confirm" onClick={this.onEditTag}>OK</button>
                </div>
            </div>
        );
    }
}

const DeleteTagMutation = gql`
    mutation DeleteTag($id: String!){
        deleteTag(id: $id){
            id
            name
        }
    }
`;

const EditTagMutation = gql`
    mutation EditTag($id: String!, $name: String!){
        editTag(id: $id, name: $name){
            id
            name
        }
    }
`;

export default compose(
    graphql(DeleteTagMutation, { name: 'DeleteTagMutation' }),
    graphql(EditTagMutation, { name: 'EditTagMutation' })
)(Tag);