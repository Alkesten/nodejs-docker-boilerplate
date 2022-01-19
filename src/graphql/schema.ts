import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from 'graphql-iso-date';
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import { types as exampleTypes } from './types/example';
import { resolvers as exampleResovers } from './resolvers/exampleResolver';

const scalarResolvers = {
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
};

const scalarTypes = `
  scalar Date
  scalar Time
  scalar DateTime
  scalar JSON
  scalar JSONObject
`;

const queryType = `
  type Query{
    _empty: String
  }
`;

const mutationType = `
  type Mutation{
	_empty: String
  }
`;

const types = [scalarTypes, queryType, mutationType, exampleTypes];

const resolvers = merge(scalarResolvers, exampleResovers);

const schema = makeExecutableSchema({
  typeDefs: types,
  resolvers,
});

export default schema;
