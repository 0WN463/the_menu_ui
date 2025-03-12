import { PropsWithChildren, useState, useRef, useEffect } from "react";
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

const ItemModal = ({
  label,
  description,
  price,
  imageUrl,
  isOpen,
  onClose,
}: {
  label: string;
  description: string;
  price: number;
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const ref = useRef<HTMLDialogElement>(null);

  const handleClose = (event: React.FormEvent) => {
    event.preventDefault();
    onClose();
    setModalOpen(false);
  };

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
    <dialog
      ref={ref}
      className="w-[80vw] h-[60vh] fixed left-[10vw] top-[10vh]"
    >
      <button onClick={handleClose} className="absolute right-2">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke-width="2"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <div className="flex">
        <img className="w-1/2 h-[60vh]" src={imageUrl} />
        <form onSubmit={handleClose}>
          <span>
            <header>{label}</header>
            <p>{description}</p>
          </span>
          <footer>{price}</footer>
        </form>
      </div>
    </dialog>
  );
};

const Menu = () => {
  const { data } = useQuery(GET_MENU);
  const [modalOpen, setModalOpen] = useState(false);

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
      <ItemModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        label="soba"
        description="lorem ipsum"
        price={10.2}
        imageUrl="https://placehold.co/480x480"
      />
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
                />
              ))}
            </Section>
          ))}
          <button onClick={() => setModalOpen(true)}> Click </button>
        </main>
      </div>
    </>
  );
};

export default Menu;
