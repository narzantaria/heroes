const { nodeDefinitions, fromGlobalId } = require('graphql-relay');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
  GraphQLString
} = require('graphql');
const heroModel = require('./models/hero');
const skillModel = require('./models/skill');

const { nodeField, nodesField, nodeInterface } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    if (type === "Hero") {
      return heroModel.getHero(id);
    } else if (type === "Skill") {
      return skillModel.getSkill(id);
    } else {
      return null;
    }
  },
  (obj) => {
    const { Hero } = require('./types/hero');
    const { Skill } = require('./types/skill');
    return obj.Hero ? Hero : Skill;
  }
);

// const nodesField = {
//   description: 'Fetches objects given their IDs',
//   type: new GraphQLNonNull(new GraphQLList(nodeInterface)),
//   args: {
//     ids: {
//       type: new GraphQLNonNull(
//         new GraphQLList(new GraphQLNonNull(GraphQLID))
//       ),
//       description: 'The IDs of objects',
//     },
//   },
//   resolve: (obj, {ids}, context, info) =>
//     Promise.all(ids.map(id => Promise.resolve(idFetcher(id, context, info)))),
// };

module.exports = { nodeInterface, nodeField, nodesField };