import { baseResolver } from '../common/base-resolvers';

//Queries
const getExample = baseResolver.createResolver(async (root, { id }) => {
  const example = {
    name: 'Test',
    id: '1231241',
  };
  return example;
});

const listExample = baseResolver.createResolver(async (root, { offset, limit }) => {
  //return ExampleService.list(offset, limit);
  return undefined;
});

//Mutations
const createExample = baseResolver.createResolver(async (root, { input }) => {
  // const example = new Example(input, ...otherStuff);
  // return CrystalzeClient.createExample(example);
  return undefined;
});

const updateExample = baseResolver.createResolver(async (root, { input }) => {
  //const example = new Example(input);
  //return ExampleService.update(id, input);
  return undefined;
});

const deleteExample = baseResolver.createResolver(async (root, { id }) => {
  return undefined;
});

export const resolvers = {
  Query: {
    getExample,
    listExample,
  },
  Mutation: {
    createExample,
    updateExample,
    deleteExample,
  },
};
