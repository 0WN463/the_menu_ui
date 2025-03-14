const SectionNav = ({ label, id }: { label: string; id: string }) => {
  return (
    <li>
      <a href={`#${id}`}>{label}</a>
    </li>
  );
};

export default SectionNav;
