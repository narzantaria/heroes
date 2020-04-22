const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLScalarType,
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
    skills: { type: new GraphQLList(GraphQLString) },
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
        skills: args.skills,
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
    skills: { type: new GraphQLList(GraphQLString) },
    date: { type: GraphQLString }
  },
  outputFields: {
    updated: { type: GraphQLBoolean },
    updatedId: { type: GraphQLString }
  },
  mutateAndGetPayload: async (args) => {
    const { id: productId } = fromGlobalId(args.id);
    const result = await heroModel.updateHero(productId, args);
    return { updatedId: args.id, updated: true };
  }
});

const UpdateHeroSkillsMutation = mutationWithClientMutationId({
  name: "UpdateHeroSkills",
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    operation: { type: new GraphQLNonNull(GraphQLString) },
    skill: { type: new GraphQLNonNull(GraphQLString) }
  },
  outputFields: {
    updated: { type: GraphQLBoolean },
    updatedId: { type: GraphQLString }
  },
  mutateAndGetPayload: async (args) => {
    const { id: productId } = fromGlobalId(args.id);
    const result = await heroModel.updateSkills(productId, args);
    return { updatedId: args.id, updated: true };
  }
});

const RemoveSkillsMutation = mutationWithClientMutationId({
  name: 'RemoveSkillsMutation',
  inputFields: {
    ids: { type: new GraphQLList(GraphQLString) }
  },
  outputFields: {
    deletedIDs: {
      type: GraphQLList(GraphQLString),
    }
  },
  mutateAndGetPayload: async args => {
    const ids = args.ids.map(id => fromGlobalId(id).id);
    await skillModel.removeSkills(ids);
    return { deletedIDs: ids };
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
    const result = await heroModel.removeHero(productId);
    return { deletedId: id, deleted: true };
  }
});

const CreateSkillMutation = mutationWithClientMutationId({
  name: "CreateSkill",
  inputFields: {
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
    return new Promise((resolve, reject) => {
      skillModel.createSkill({
        name: args.name,
        description: args.description,
        date: new Date(args.date)
      })
        .then(skill => resolve({ skill }))
        .catch(reject);
    });
  }
});

const UpdateSkillMutation = mutationWithClientMutationId({
  name: "UpdateSkill",
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: new GraphQLNonNull(GraphQLString) }
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

const RemoveSkillMutation = mutationWithClientMutationId({
  name: "RemoveSkill",
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    deleted: { type: GraphQLBoolean },
    deletedId: { type: GraphQLString }
  },
  mutateAndGetPayload: async ({ id }, { viewer }) => {
    const { id: productId } = fromGlobalId(id);
    const result = await skillModel.removeSkill(productId);
    return { deletedId: id, deleted: true };
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
    removeSkill: RemoveSkillMutation,
    updateSkills: UpdateHeroSkillsMutation,
    removeSkills: RemoveSkillsMutation
  }
});

module.exports = Mutation;