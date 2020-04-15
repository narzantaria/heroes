const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const { globalIdField, connectionDefinitions } = require('graphql-relay');
const { nodeInterface } = require('../nodes');

const Skill = new GraphQLObjectType({
  name: "Skill",
  description: "Skill type",
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField(),
    name: {
      type: GraphQLString,
      description: "Skill Name"
    },
    description: {
      type: GraphQLString,
      description: "Skill's description"
    },
    date: {
      type: GraphQLString,
      description: "Skill's date"
    }
  })
});

const { connectionType: SkillConnection } = connectionDefinitions({
  nodeType: Skill
});

module.exports = { Skill, SkillConnection };