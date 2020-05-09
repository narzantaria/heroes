const {  
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean
} = require('graphql');

const { fromGlobalId, mutationWithClientMutationId } = require('graphql-relay');
const { Hero } = require('./types/hero');
const { Skill } = require('./types/skill');

const heroModel = require('./models/hero');
const skillModel = require('./models/skill');

const CreateHeroMutation = mutationWithClientMutationId({
  name: "CreateHero",
  inputFields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: new GraphQLNonNull(GraphQLString) }
  },
  outputFields: {
    hero: {
      type: Hero
    }
  },
  mutateAndGetPayload: args => {
    return new Promise((resolve, reject) => {
      heroModel.createHero({
        name: args.name,
        skills: [],
        date: new Date(args.date)
      })
        .then(hero => resolve({ hero }))
        .catch(reject);
    });
  }
});

const UpdateHeroMutation = mutationWithClientMutationId({
  name: "UpdateHero",
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    date: { type: GraphQLString }
  },
  outputFields: {
    updated: { type: GraphQLBoolean },
    updatedId: { type: GraphQLString }
  },
  mutateAndGetPayload: async (args) => {
    const { id: productId } = fromGlobalId(args.id);
    const result = await heroModel.updateHero(productId, args, 'update');
    return { updatedId: args.id, updated: true };
  }
});

const RemoveHeroMutation = mutationWithClientMutationId({
  name: "RemoveHero",
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    deleted: { type: GraphQLBoolean },
    deletedId: { type: GraphQLString }
  },
  mutateAndGetPayload: async ({ id }, { viewer }) => {
    const { id: productId } = fromGlobalId(id);
    await heroModel.removeHero(productId)
      .then(hero => {
        if (hero.skills.length > 0) {
          const skills = hero.skills;
          for (var i = 0; i < skills.length; i++) {
            skillModel.removeSkill(skills[i])
              .catch(err => console.log(err));
          }
        }
      })
      .catch(err => console.log(err));
    return { deletedId: id, deleted: true };
  }
});

const CreateSkillMutation = mutationWithClientMutationId({
  name: "CreateSkill",
  inputFields: {
    heroId: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: new GraphQLNonNull(GraphQLString) }
  },
  outputFields: {
    skill: {
      type: Skill
    }
  },
  mutateAndGetPayload: args => {
    const { id: convertedHeroId } = fromGlobalId(args.heroId);
    return new Promise((resolve, reject) => {
      skillModel.createSkill({
        name: args.name,
        description: args.description,
        date: new Date(args.date)
      })
        .then(skill => {
          heroModel.updateHero(convertedHeroId, skill._id, 'addskill');
          resolve({ skill });
        })
        .catch(reject);
    });
  }
});

const RemoveSkillMutation = mutationWithClientMutationId({
  name: "RemoveSkill",
  inputFields: {
    heroId: { type: new GraphQLNonNull(GraphQLString) },
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    deleted: { type: GraphQLBoolean },
    deletedId: { type: GraphQLString }
  },
  mutateAndGetPayload: args => {
    const { id: convertedHeroId } = fromGlobalId(args.heroId);
    const { id: convertedSkillId } = fromGlobalId(args.id);
    return new Promise((resolve, reject) => {
      skillModel.removeSkill(convertedSkillId)
        .then(skill => {
          heroModel.updateHero(convertedHeroId, skill._id, 'removeskill');
          resolve({ deletedId: args.id, deleted: true });
        })
        .catch(reject);
    });
  }
});

const UpdateSkillMutation = mutationWithClientMutationId({
  name: "UpdateSkill",
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    date: { type: GraphQLString }
  },
  outputFields: {
    updated: { type: GraphQLBoolean },
    updatedId: { type: GraphQLString }
  },
  mutateAndGetPayload: async (args) => {
    const { id: productId } = fromGlobalId(args.id);
    const result = await skillModel.updateSkill(productId, args);
    return { updatedId: args.id, updated: true };
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Mutations",
  fields: {
    createHero: CreateHeroMutation,
    updateHero: UpdateHeroMutation,
    removeHero: RemoveHeroMutation,
    createSkill: CreateSkillMutation,
    updateSkill: UpdateSkillMutation,
    removeSkill: RemoveSkillMutation
  }
});

module.exports = Mutation;