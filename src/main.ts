import { ApolloServer } from 'apollo-server';

import { environment } from './environment';
import { types } from './graphql/types/example';
import { resolvers } from './graphql/resolvers/exampleResolver';

const server = new ApolloServer({
  typeDefs: types,
  resolvers,
  introspection: true,
});

server.listen(environment.port).then(({ url }) => console.log(`Server ready at ${url}. `));

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}
