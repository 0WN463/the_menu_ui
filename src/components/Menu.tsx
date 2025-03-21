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

// from: https://flowbite.com/docs/components/spinner/
const Spinner = () => (
  <div className="h-screen flex justify-center items-center">
    <svg
      aria-hidden="true"
      className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span className="sr-only">Loading...</span>
  </div>
);

const Menu = () => {
  const { data, loading } = useQuery(GET_MENU);
  const [expandedItem, setExpandedItem] = useState<ItemDetails>();
  const [currentSections, setCurrentSections] = useState<Set<string>>(
    new Set(),
  );

  if (loading) return <Spinner />;

  if (!data?.menus.length) return "Error! Missing Menu";

  const menu = data?.menus[0];
  const firstVisibleSection = menu.sections
    .map((s) => s.identifier ?? "")
    .find((s) => currentSections.has(s));

  const nav = (
    <nav className="px-8 fixed">
      <h1 className="text-2xl">{menu.label}</h1>
      <ol>
        {menu.sections.map((s) => (
          <SectionNav
            key={s.identifier}
            id={s.identifier ?? ""}
            label={s.label ?? ""}
            isCurrent={s.identifier === firstVisibleSection}
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
      <div className="flex w-full pb-[40em]">
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
              onVisibleChanged={(section: string, isVisible: boolean) => {
                const newSections = new Set(currentSections);

                if (isVisible) {
                  newSections.add(section);
                } else {
                  newSections.delete(section);
                }

                if (newSections.size == currentSections.size) return;

                setCurrentSections(newSections);
              }}
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
