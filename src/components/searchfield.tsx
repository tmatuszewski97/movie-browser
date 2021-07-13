import React, { FC } from "react";

const Searchfield: FC = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Search for a movie..."
        style={{ borderWidth: 3, borderStyle: "solid", borderColor: "yellow" }}
      />
    </>
  );
};

export default Searchfield;
