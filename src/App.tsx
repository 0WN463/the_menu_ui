import './App.css'

import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';

import { gql } from './__generated__/gql';


const client = new ApolloClient<{}>({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});


const GET_MENU = gql(`
  query GetMenu { menus {label, identifier}}
`);

 
const Menu = () => {
	  const { data } = useQuery(GET_MENU)

	  return data?.menus.map(i => <div className="font-bold" key={i.identifier}>{i.label}</div>)
}

function App() {
  return (

  <ApolloProvider client={client}>
      <Menu />
  </ApolloProvider>
  )
}

export default App
