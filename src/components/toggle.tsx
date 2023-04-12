import { useState } from "react";

const Toggle = () => {
  const [state, setState] = useState<boolean>(false);

  return (
    <div className="toggle">
      <div className="toggle__btn"></div>
    </div>
  );
};

export default Toggle;
