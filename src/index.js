const express = require('express');
const app = express();
const { sequelize } = require('../models');

const { ApolloServer } = require('apollo-server');
const schema = require('./schema');
const resolvers = require('./resolvers');

app.use(express.json());
app.use(express.text());

const server = new ApolloServer({
    typeDefs: schema,
    resolvers

})

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        server
            .listen()
            .then(({ url }) =>
                console.log(`Server is running on ${url}graphql`)
            )
    }
    catch (e) {
        console.log(e);
    }
};

start();