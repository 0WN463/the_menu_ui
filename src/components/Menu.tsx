import { PropsWithChildren } from "react";
import { useQuery } from "@apollo/client";

import { motion } from "framer-motion";

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
    <li>
      <a href={`#${id}`}>{label}</a>
    </li>
  );
};

const Section = ({
  identifier,
  label,
  description,
  children,
}: PropsWithChildren<{
  identifier: string;
  label: string;
  description: string;
}>) => {
  return (
    <motion.section
      key={identifier}
      id={identifier}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <header className="text-xl">{label}</header>
      <p>{description}</p>
      <div className="grid gap-6 grid-cols-3">{children}</div>
    </motion.section>
  );
};

const Item = ({
  identifier,
  label,
  description,
  price,
  imageUrl,
}: {
  identifier: string;
  label: string;
  description: string;
  price: number;
  imageUrl: string;
}) => {
  return (
    <article key={identifier} className="shadow-lg rounded-xl">
      <img className="rounded-t-xl" src={imageUrl} />
      <div className="p-2">
        <header className="text-md line-clamp-2 font-medium">{label}</header>
        <p className="line-clamp-3">{description}</p>
        <div className="flex justify-between items-center">
          <p>${price.toFixed(2)}</p>
          <button className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
        </div>
      </div>
    </article>
  );
};

const Menu = () => {
  const { data } = useQuery(GET_MENU);

  if (!data?.menus.length) return "Error! Missing Menu";

  const menu = data?.menus[0];

  const nav = (
    <nav className="px-8 fixed">
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
      <main className="flex-3/4 py-2 px-6">
        <h1 className="text-4xl font-extrabold">{menu.label}</h1>
        {menu.sections.map((s) => (
          <Section
            identifier={s.identifier ?? ""}
            label={s.label ?? ""}
            description={s.description ?? ""}
          >
            {s.items.map((i) => (
              <Item
                identifier={i.identifier ?? ""}
                label={i.label ?? ""}
                description={i.description ?? ""}
                price={i.price ?? 0}
                imageUrl="https://placehold.co/480x480"
              />
            ))}
          </Section>
        ))}
      </main>
    </div>
  );
};

export default Menu;
