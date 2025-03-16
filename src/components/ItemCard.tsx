import { motion } from "framer-motion";

export type ItemDetails = {
  identifier: string;
  label: string;
  description: string;
  price: number;
  imageUrl: string;
  isAvailable: boolean;
};

const ItemCard = ({
  identifier,
  label,
  description,
  price,
  imageUrl,
  isAvailable,
  onExpanded,
}: ItemDetails & {
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
          isAvailable,
        })
      }
    >
      <div className="overflow-hidden rounded-t-xl">
        <motion.img src={imageUrl} whileHover={{ scale: 1.3 }} />
      </div>
      <div className="p-2 flex flex-col h-40">
        <header className="text-md line-clamp-2 font-medium font-label">
          {label}
        </header>
        <p className="line-clamp-3 font-description">{description}</p>
        <div className="flex justify-between items-center mt-auto">
          <p>${price.toFixed(2)}</p>
          <button
            className="bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 rounded disabled:bg-red-300 disabled:hover:bg-red-400"
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

export default ItemCard;
