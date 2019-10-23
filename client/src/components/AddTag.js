import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { FaPlusCircle } from 'react-icons/fa';
import { getTagsQuery } from '../queries';

class AddTag extends Component {
    state = {
        name: '',
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
            name: '',
            formVisible: ''
        });
    }

    onNameChange = event => {
        this.setState({
            name: event.target.value
        });
    }

    onAddTag = event => {
        event.preventDefault();

        if(this.state.name !== ''){
            this.props.mutate({
                variables: {
                    name: this.state.name
                },
                refetchQueries: [{ query: getTagsQuery }]
            }).then(res => {
                this.setState({
                    name: '',
                    formVisible: ''
                }); 
            });
        } else {
            alert('ERROR: The field "name" MUST have a value');
        }
    }

    render(){
        return (
            <div className="addTag">
                <div className="addTag__add-button">
                    <button onClick={this.onShowAddForm}>Add Tag <FaPlusCircle /></button>
                </div>

                <form className={`addTag__form ${this.state.formVisible}`}>
                    <label htmlFor="addTag-name-field">Name:</label>
                    <input type="text" id="addTag-name-field" onChange={this.onNameChange} value={ this.state.name } />

                    <div className="addTag__form__buttons-wrapper">
                        <button type="button" onClick={this.onAddTag} className="addTag-confirmAddButton">Add Tag</button>
                        <button type="button" onClick={this.onHideAddForm}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

const AddTagMutation = gql`
    mutation AddTagMutation($name: String!){
        addTag(name: $name){
            id
            name
        }
    }
`;

export default graphql(AddTagMutation)(AddTag);