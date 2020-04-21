const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
  GraphQLString
} = require('graphql');

const {
  connectionArgs,
  connectionFromPromisedArray,
  fromGlobalId
} = require('graphql-relay');

const { nodeInterface, nodeField, nodesField } = require('./nodes');
const { Hero, HeroConnection } = require('./types/hero');
const { Skill, SkillConnection } = require('./types/skill');

const heroModel = require('./models/hero');
const skillModel = require('./models/skill');

const Viewer = new GraphQLObjectType({
  name: "Viewer",
  fields: {
    Hero: {
      type: Hero,
      args: { id: { type: GraphQLID } },
      resolve: (_, args) => {
        const { type, id } = fromGlobalId(args.id);
        return heroModel.getHero(id);
      }
    },
    Skill: {
      type: Skill,
      args: { id: { type: GraphQLID } },
      resolve: (_, args) => {
        const { type, id } = fromGlobalId(args.id);
        return skillModel.getSkill(id);
      }
    },
    Heroes: {
      type: new GraphQLNonNull(HeroConnection),
      args: connectionArgs,
      resolve: (_, args) =>
        connectionFromPromisedArray(heroModel.getHeroes(), args)
    },
    Skills: {
      type: new GraphQLNonNull(SkillConnection),
      args: connectionArgs,
      resolve: (_, args) =>
        connectionFromPromisedArray(skillModel.getSkills(), args)
    },
    // HeroSkills: {
    //   type: Skill,
    //   args: { ids: { type: new GraphQLList(GraphQLString) } },
    //   resolve: (_, args) => {
    //     let ids = [];
    //     for (var i = 0; i < args.ids.length; i++) {
    //       ids.push(fromGlobalId(args.ids[i]).id);
    //     }
    //     return skillModel.getHeroSkills(ids);
    //   }
    // },
    id: {
      type: new GraphQLNonNull(GraphQLID),
      args: {},
      resolve: (_, args) => "viewer-fixed"
    }
  }
});

const Query = new GraphQLObjectType({
  name: "Query",
  description: "Query interface for our app",
  fields: {
    node: nodeField,
    nodes: nodesField,
    viewer: {
      name: "Viewer",
      description: "Query for docs",
      type: new GraphQLNonNull(Viewer),
      resolve: (_, args) => {
        return {};
      }
    }
  }
});

module.exports = Query;