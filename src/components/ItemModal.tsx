import { useState, useRef, useEffect } from "react";
import { ItemDetails } from "./ItemCard";

const ItemModal = ({
  label,
  description,
  price,
  imageUrl,
  isAvailable,
  isOpen,
  onClose,
}: ItemDetails & {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const ref = useRef<HTMLDialogElement>(null);
  const [amount, setAmount] = useState<number>(1);

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
              <header className="text-xl font-label">{label}</header>
              <p className="font-description">{description}</p>
            </span>
            <footer className="bg-gray-200 w-full flex gap-4 p-4">
              <div className="border-2 grid grid-cols-3 w-1/5">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    setAmount(amount - 1);
                  }}
                >
                  -
                </button>
                <span className="flex justify-center items-center">
                  {amount}
                </span>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    if (amount <= 0) return;
                    setAmount(amount + 1);
                  }}
                >
                  +
                </button>
              </div>
              <button
                className="bg-red-500  hover:bg-red-300 text-white flex-grow py-2 disabled:bg-red-300 disabled:hover:bg-red-500"
                disabled={!isAvailable}
              >
                {isAvailable ? `Add (${price})` : "Unavailable"}
              </button>
            </footer>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ItemModal;
