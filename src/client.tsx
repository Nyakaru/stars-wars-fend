import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from "@apollo/client";

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: "https://swap-bend.herokuapp.com/graphql",
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: link,
  cache,
});
