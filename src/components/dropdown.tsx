import { useState } from "react";
import DropdownArrow from "../assets/dropdown-arrow";

type DropdownProps = {
  dropdownAnswer?: string;
  dropdownQuestion?: string;
};

const Dropdown = ({ dropdownAnswer, dropdownQuestion }: DropdownProps) => {
  const [active, setActive] = useState<boolean>(true);

  return (
    <>
      <div className="dropdown" onClick={() => setActive(!active)}>
        <div className="dropdown__question">{dropdownQuestion}</div>
        <div className="dropdown__arrow">
          <DropdownArrow />
        </div>
      </div>
      <div className={`dropdown ${active ? "inactive" : ""}`}>
        <div className={`dropdown__answer ${active ? "inactive" : ""}`}>
          {dropdownAnswer}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
