const { nodeDefinitions, fromGlobalId } = require('graphql-relay');
const heroModel = require('./models/hero');

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    if (type == "Hero") {
      return heroModel.getHero(id);
    } else {
      return null;
    }
  },
  (obj) => {
    const { Hero } = require('./types/hero');
    if (obj instanceof Hero) {
      return Hero;
    }
    return null;
  }
);

module.exports = { nodeInterface, nodeField };