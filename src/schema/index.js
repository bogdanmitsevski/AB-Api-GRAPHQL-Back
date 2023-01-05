//import { gql } from "apollo-server-core";
const { gql } = require('apollo-server');
const Device = require('./devices');
const Experiment = require('./experiments');
const { GraphQLScalarType } = require('graphql/type');

const Date = new GraphQLScalarType({
  name: 'Date',
  serialize(value) {
    return value;
  },
});

const baseSchema = gql `
    scalar Date

    type Query {
        _: Boolean
    }

    type Mutation {
        _: Boolean
    }

    type Subscription {
        _: Boolean
    }

`;

module.exports = [baseSchema, Device, Experiment];