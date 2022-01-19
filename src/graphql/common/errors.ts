import { createError } from 'apollo-errors';

export const UnkownError = createError('UnkownError', {
  message: 'An unkown error has occured!',
});
