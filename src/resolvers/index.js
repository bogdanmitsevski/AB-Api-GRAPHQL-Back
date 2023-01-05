const {GraphQLDateTime} = require('graphql-iso-date');
const deviceResolver = require('./devices');
const experimentResolver = require('./experiments');

const customScalarResolver = {
    Date: GraphQLDateTime,
  };


module.exports = [customScalarResolver, deviceResolver, experimentResolver ]