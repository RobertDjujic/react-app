import Dropdown from "./dropdown";

const DropdownGrid = () => {
  return (
    <div className="dropdown__grid">
      <Dropdown dropdownText="What are the requirements for tutors?" />
      <Dropdown dropdownText="How long does it take before I can start teaching?" />
      <Dropdown dropdownText="How does the subscription work?" />
      <Dropdown dropdownText="What does the employment relationship look like?" />
      <Dropdown dropdownText="What makes Teorem different from other platforms?" />
    </div>
  );
};

export default DropdownGrid;
