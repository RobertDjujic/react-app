import Dropdown from "./dropdown";

const DropdownGrid = () => {
  return (
    <div className="dropdown__grid">
      <Dropdown
        dropdownQuestion="What are the requirements for tutors?"
        dropdownAnswer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Dropdown
        dropdownQuestion="How long does it take before I can start teaching?"
        dropdownAnswer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Dropdown
        dropdownQuestion="How does the subscription work?"
        dropdownAnswer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Dropdown
        dropdownQuestion="What does the employment relationship look like?"
        dropdownAnswer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Dropdown
        dropdownQuestion="What makes Teorem different from other platforms?"
        dropdownAnswer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
};

export default DropdownGrid;
