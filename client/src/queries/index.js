import gql from 'graphql-tag'; 

export const getTagsQuery = gql`
    query {
        tags {
            id
            name
        }
    }
`;

export const getRaritiesQuery = gql`
    query {
        rarities {
            id
            level
            requiredShards
        }
    }
`;