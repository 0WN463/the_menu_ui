import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

const Section = ({
  identifier,
  label,
  description,
  isAvailable,
  children,
}: PropsWithChildren<{
  identifier: string;
  label: string;
  description: string;
  isAvailable?: boolean;
}>) => {
  return (
    <motion.section
      key={identifier}
      id={identifier}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: isAvailable ? 1 : 0.5 }}
    >
      <header className="text-xl my-4">{label}</header>
      <p className="my-4">{description}</p>
      <div className="grid gap-6 grid-cols-3">{children}</div>
    </motion.section>
  );
};
export default Section;
