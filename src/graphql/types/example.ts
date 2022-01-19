import { gql } from 'apollo-server';

export const types = gql`
  type Query {
    getExample: Example
    listExample: [Example]
  }
  type Mutation {
    createExample(input: createExampleInput!): Example
    updateExample(input: updateExampleInput!): Example
    deleteExample(input: deleteExampleInput!): String
  }

  type Example {
    name: String
    id: String
    child: ExampleChild
  }

  type ExampleChild {
    id: String
    childType: String
  }

  input ExampleChildInput {
    childType: String
  }

  input createExampleInput {
    name: String!
    child: ExampleChildInput
  }

  input updateExampleInput {
    id: String!
    name: String!
  }

  input deleteExampleInput {
    id: String!
  }
`;
