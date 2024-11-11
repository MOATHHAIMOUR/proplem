import { useState } from "react";

const MYstate = () => {
  const [num, setnum] = useState(0);
  return (
    <div className="p-4 bg-red-300" onClick={() => setnum((pre) => pre + 1)}>
      {num}
    </div>
  );
};

export default MYstate;
