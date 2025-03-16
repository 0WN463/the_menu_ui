import { PropsWithChildren, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import { useInView } from "motion/react";

const Section = ({
  identifier,
  label,
  description,
  isAvailable,
  onVisibleChanged,
  children,
}: PropsWithChildren<{
  identifier: string;
  label: string;
  description: string;
  isAvailable?: boolean;
  onVisibleChanged: (_: string, __: boolean) => void;
}>) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    onVisibleChanged(identifier, isInView);
  }, [isInView, onVisibleChanged]);

  return (
    <motion.section
      key={identifier}
      ref={ref}
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
