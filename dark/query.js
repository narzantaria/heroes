const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID
} = require('graphql');

const {
  connectionArgs,
  connectionFromPromisedArray,
  fromGlobalId
} = require('graphql-relay');

const { nodeField } = require('./nodes');
const { Hero, HeroConnection } = require('./types/hero');

const heroModel = require('./models/hero');

const Viewer = new GraphQLObjectType({
  name: "Viewer",
  fields: {
    Hero: {
      type: Hero,
      args: {id: {type: GraphQLID}},
      resolve: (_, args) => {
        const {type,id} = fromGlobalId(args.id);
        return heroModel.getHero(id);
      }
    },
    Heroes: {
      type: new GraphQLNonNull(HeroConnection),
      args: connectionArgs,
      resolve: (_, args) =>
        connectionFromPromisedArray(heroModel.getHeroes(), args)
    },
    id: {
      type: new GraphQLNonNull(GraphQLID),
      args: {},
      resolve: (_, args) => "viewer-fixed"
    }
  }
});

const Query = new GraphQLObjectType({
  name: "Query",
  description: "Query interface for our blog",
  fields: {
    node: nodeField,
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