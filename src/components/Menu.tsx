import { PropsWithChildren, useState, useRef, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { motion } from "framer-motion";

import { gql } from "../__generated__/gql";

type ItemDetails = {
  identifier: string;
  label: string;
  description: string;
  price: number;
  imageUrl: string;
};

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
  isAvailable = true,
  onExpanded,
}: ItemDetails & {
  isAvailable?: boolean;
  onExpanded: (_: ItemDetails) => void;
}) => {
  return (
    <article
      key={identifier}
      className="shadow-lg rounded-xl"
      onClick={() =>
        onExpanded({
          identifier,
          label,
          description,
          price,
          imageUrl,
        })
      }
    >
      <div className="overflow-hidden rounded-t-xl">
        <motion.img src={imageUrl} whileHover={{ scale: 1.3 }} />
      </div>
      <div className="p-2">
        <header className="text-md line-clamp-2 font-medium">{label}</header>
        <p className="line-clamp-3">{description}</p>
        <div className="flex justify-between items-center">
          <p>${price.toFixed(2)}</p>
          <button
            className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded disabled:bg-red-300"
            disabled={!isAvailable}
            onClick={(e) => {
              e.stopPropagation();
              console.log("add item");
            }}
          >
            {isAvailable ? "Add" : "Unavailable"}
          </button>
        </div>
      </div>
    </article>
  );
};

const ItemModal = ({
  label,
  description,
  price,
  imageUrl,
  isOpen,
  onClose,
}: ItemDetails & {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const ref = useRef<HTMLDialogElement>(null);

  const handleClose = (event: React.FormEvent) => {
    event.preventDefault();
    setModalOpen(false);
  };

  useEffect(() => {
    ref.current?.addEventListener("close", () => onClose());
    return () => ref.current?.removeEventListener("close", () => onClose());
  }, []);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = ref.current;

    if (isModalOpen) {
      modalElement?.showModal();
    } else {
      modalElement?.close();
    }
  }, [isModalOpen]);

  return (
    <>
      <div className="h-screen w-screen bg-gray-800 fixed opacity-80"></div>
      <dialog
        ref={ref}
        className="w-[80vw] h-[80vh] fixed left-[10vw] top-[10vh] z-10"
      >
        <button onClick={handleClose} className="absolute right-2 top-2">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="flex">
          <img className="w-1/2 h-[80vh] object-cover" src={imageUrl} />
          <form onSubmit={handleClose} className="flex flex-col w-1/2">
            <span className="flex-grow m-6">
              <header className="text-xl">{label}</header>
              <p>{description}</p>
            </span>
            <footer className="bg-gray-200 w-full flex gap-4 p-4">
              <div className="border-2 grid grid-cols-3 w-1/5">
                <button>-</button>
                <span className="flex justify-center items-center"> 1 </span>
                <button>+</button>
              </div>
              <button className="bg-red-300 flex-grow py-2">
                Add (${price})
              </button>
            </footer>
          </form>
        </div>
      </dialog>
    </>
  );
};

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
          <h1 className="text-4xl font-extrabold">{menu.label}</h1>
          {menu.sections.map((s) => (
            <Section
              key={s.identifier}
              identifier={s.identifier ?? ""}
              label={s.label ?? ""}
              description={s.description ?? ""}
            >
              {s.items.map((i) => (
                <Item
                  key={i.identifier}
                  identifier={i.identifier ?? ""}
                  label={i.label ?? ""}
                  description={i.description ?? ""}
                  price={i.price ?? 0}
                  imageUrl="https://placehold.co/480x480"
                  onExpanded={setExpandedItem}
                  isAvailable={i.identifier !== "yakisoba"}
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
