const SectionNav = ({
  label,
  id,
  isCurrent,
}: {
  label: string;
  id: string;
  isCurrent: boolean;
}) => {
  return (
    <li
      className={`border-l-4 pl-2 leading-8 ${isCurrent ? "border-red-500" : "border-gray-200"}`}
    >
      <a href={`#${id}`}>{label}</a>
    </li>
  );
};

export default SectionNav;
