const express = require('express');
const expressGraphQL = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const cors = require('cors');

const mongoose = require('./mongoose/mongoose');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const app = express();
const port = process.env.PORT || 4000;

app.use( cors() );

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`EVENTS APP running in port ${ port }`);
});