const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean
} = require('graphql');

const { fromGlobalId, mutationWithClientMutationId } = require('graphql-relay');
const { Hero } = require('./types/hero');

const heroModel = require('./models/hero');

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
    name: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: new GraphQLNonNull(GraphQLString) }
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

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Mutations",
  fields: {
    createHero: CreateHeroMutation,
    removeHero: RemoveHeroMutation,
    updateHero: UpdateHeroMutation
  }
});

module.exports = Mutation;