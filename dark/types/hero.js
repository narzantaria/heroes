const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const { connectionArgs, connectionDefinitions, connectionFromArray, globalIdField } = require('graphql-relay');
const { nodeInterface } = require('../nodes');
const { SkillConnection } = require('./skill');
const skillModel = require('../models/skill');

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
      type: SkillConnection,
      args: connectionArgs,
      description: "Skills of Hero",
      resolve: (_, args) => connectionFromArray(_.skills.map(skill => skillModel.getSkill(skill)), args)
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