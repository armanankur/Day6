import React, { useState } from "react";

const Toggle = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      {show ? <h1>My name is Amit</h1> : <h1>My name is Ranjan</h1>}
      <button onClick={handleClick}>Change Name</button>
    </>
  );
};
export default Toggle;
