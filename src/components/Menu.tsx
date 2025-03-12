import { useQuery } from "@apollo/client";

import { gql } from "../__generated__/gql";

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

const SectionNav = ({ label, id }: { label: string; id: string }) => {
  return (
    <li id={id}>
      <a href={`#${id}`}>{label}</a>
    </li>
  );
};

const Section = ({
  identifier,
  label,
  description,
}: {
  identifier: string;
  label: string;
  description: string;
}) => {
  return (
    <section key={identifier} id={identifier}>
      <header className="text-xl">{label}</header>
      <p>{description}</p>
    </section>
  );
};

const Menu = () => {
  const { data } = useQuery(GET_MENU);

  if (!data?.menus.length) return "Error! Missing Menu";

  const menu = data?.menus[0];

  const nav = (
    <nav className="px-8">
      <h1 className="text-2xl">{menu.label}</h1>
      <ol>
        {menu.sections.map((s) => (
          <SectionNav id={s.identifier ?? ""} label={s.label ?? ""} />
        ))}
      </ol>
    </nav>
  );

  return (
    <div className="flex w-full">
      <aside className="flex-1/4">{nav}</aside>
      <main className="flex-3/4">
        <h1 className="text-4xl font-extrabold">{menu.label}</h1>
        {menu.sections.map((s) => (
          <Section
            identifier={s.identifier ?? ""}
            label={s.label ?? ""}
            description={s.description ?? ""}
          />
        ))}
      </main>
    </div>
  );
};

export default Menu;
