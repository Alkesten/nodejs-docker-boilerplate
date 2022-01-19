import { createResolver } from 'apollo-resolvers';
import { isInstance } from 'apollo-errors';
import { UnkownError } from './Errors';

export const baseResolver = createResolver(null, (root, args, context, error) => {
  if (isInstance(error)) {
    return error;
  }

  return new UnkownError({
    internalData: {
      error: error.toString(),
    },
  });
});

export const authenticatedResolver = createResolver(null, (root, args, context, error) => {
  if (isInstance(error)) {
    return error;
  }

  return new UnkownError({
    internalData: {
      error: error.toString(),
    },
  });
});
