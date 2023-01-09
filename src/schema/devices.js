const { gql } = require('apollo-server');

module.exports = gql`

type Device {
    id: Int!
    uuid: String!
    experimentId: Int!
    createdAt: Date!
    updatedAt: Date!
    experimentValue: String!
  }

  extend type Query {

    allDevices: Int
    totalDevicesByGroupA: Int
    totalDevicesByGroupB: Int
    totalDevicesByGroupC: Int

  }

  extend type Mutation {

    Device: Device

  }
`;