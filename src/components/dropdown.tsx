import DropdownArrow from "../assets/dropdown-arrow";

type DropdownProps = {
  dropdownText?: string;
};

const Dropdown = ({ dropdownText }: DropdownProps) => {
  return (
    <div className="dropdown">
      <div className="dropdown__text">{dropdownText}</div>
      <div className="dropdown__arrow">
        <DropdownArrow />
      </div>
    </div>
  );
};

export default Dropdown;
