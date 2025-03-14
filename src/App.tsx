import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Menu from "./components/Menu";

const client = new ApolloClient<{}>({
  uri: import.meta.env.VITE_BACKEND_URL,
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Menu />
  </ApolloProvider>
);

export default App;
