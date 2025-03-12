import { useQuery } from '@apollo/client';

import { gql } from '../__generated__/gql';

const GET_MENU = gql(`
  query GetMenu {
	  menus {
		  label
		  identifier
		  sections {
			  identifier
			  label
			  description
			  items {
				  identifier
				  label
				  description
				  price
			  }
		  }
	  }
  }
`);

const Menu = () => {
	  const { data } = useQuery(GET_MENU)

	  return data?.menus.map(i => <div className="font-bold" key={i.identifier}>{i.label}</div>)
}

export default Menu
