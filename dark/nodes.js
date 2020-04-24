const { nodeDefinitions, fromGlobalId } = require('graphql-relay');
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

module.exports = { nodeInterface, nodeField, nodesField };