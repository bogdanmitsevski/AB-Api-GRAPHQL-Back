const { gql } = require('apollo-server');

module.exports = gql`

type Experiment {
    id: Int!
    key: String!
    value: String!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {

    allExperiments: [Experiment]

  }

  
`;