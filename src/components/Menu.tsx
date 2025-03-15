import { useState } from "react";
import SectionNav from "./SectionNav";
import Section from "./Section";
import ItemCard, { ItemDetails } from "./ItemCard";
import ItemModal from "./ItemModal";
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
				  imageUrl
			  }
		  }
	  }
  }
`);

const Menu = () => {
  const { data } = useQuery(GET_MENU);
  const [expandedItem, setExpandedItem] = useState<ItemDetails>();

  if (!data?.menus.length) return "Error! Missing Menu";

  const menu = data?.menus[0];

  const nav = (
    <nav className="px-8 fixed">
      <h1 className="text-2xl">{menu.label}</h1>
      <ol>
        {menu.sections.map((s) => (
          <SectionNav
            key={s.identifier}
            id={s.identifier ?? ""}
            label={s.label ?? ""}
          />
        ))}
      </ol>
    </nav>
  );

  return (
    <>
      {expandedItem && (
        <ItemModal
          isOpen={true}
          onClose={() => setExpandedItem(undefined)}
          {...expandedItem}
        />
      )}
      <div className="flex w-full">
        <aside className="flex-1/4">{nav}</aside>
        <main className="flex-3/4 py-2 px-6">
          <h1 className="text-4xl font-extrabold mb-8">{menu.label}</h1>
          {menu.sections.map((s) => (
            <Section
              key={s.identifier}
              identifier={s.identifier ?? ""}
              label={s.label ?? ""}
              description={s.description ?? ""}
              isAvailable={s.identifier !== "seasonal_items"}
            >
              {s.items.map((i) => (
                <ItemCard
                  key={i.identifier}
                  identifier={i.identifier ?? ""}
                  label={i.label ?? ""}
                  description={i.description ?? ""}
                  price={i.price ?? 0}
                  imageUrl={i.imageUrl ?? "https://placehold.co/480x480"}
                  onExpanded={setExpandedItem}
                  isAvailable={
                    i.identifier !== "yakisoba" &&
                    s.identifier !== "seasonal_items"
                  }
                />
              ))}
            </Section>
          ))}
        </main>
      </div>
    </>
  );
};

export default Menu;
