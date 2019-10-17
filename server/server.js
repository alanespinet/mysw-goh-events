const express = require('express');
const expressGraphQL = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');

const mongoose = require('./mongoose/mongoose');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const app = express();
const port = process.env.PORT || 3000;

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`EVENTS APP running in port ${ port }`);
});