import './App.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Menu from './components/Menu'

const client = new ApolloClient<{}>({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

const App = () => 
  <ApolloProvider client={client}>
      <Menu />
  </ApolloProvider>

export default App
