const { gql } = require('apollo-server');

module.exports = gql`

type Device {
    id: Int!
    uuid: String!
    experimentId: Int!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {

    allDevices: [Device]
    currentDevice(uuid:String!): [Device]
    totalDevicesByGroupA: Int
    totalDevicesByGroupB: Int
    totalDevicesByGroupC: Int

  }

  extend type Mutation {

    newDevice: Device

  }
`;