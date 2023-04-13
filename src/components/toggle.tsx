import { useState } from "react";

const Toggle = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className={`toggle ${active ? "active" : ""}`}>
      <div className="toggle__thumb" onClick={() => setActive(!active)}></div>
    </div>
  );
};

export default Toggle;
