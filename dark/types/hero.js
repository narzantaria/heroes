const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const { globalIdField, connectionDefinitions } = require('graphql-relay');
const { nodeInterface } = require('../nodes');

const Hero = new GraphQLObjectType({
  name: "Hero",
  description: "lkjlkjlkjlkjlk",
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField(),
    name: {
      type: GraphQLString,
      description: "Name of Hero"
    },
    date: {
      type: GraphQLString,
      description: "Hero date of birth"
    }
  })
});

const { connectionType: HeroConnection } = connectionDefinitions({
  nodeType: Hero
});

module.exports = { Hero, HeroConnection };