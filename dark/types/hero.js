const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const { globalIdField, connectionDefinitions } = require('graphql-relay');
const { nodeInterface } = require('../nodes');

const Hero = new GraphQLObjectType({
  name: "Hero",
  description: "Hero type",
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField(),
    name: {
      type: GraphQLString,
      description: "Hero Name"
    },
    skills: {
      type: new GraphQLList(GraphQLString),
      description: "Skills of Hero"
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