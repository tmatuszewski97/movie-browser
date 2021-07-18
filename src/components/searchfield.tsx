import React, { FC } from "react";

interface Props {
  className?: string;
  placeholder: string;
}

const Searchfield: FC<Props> = ({ className, placeholder }) => {
  return (
    <input
      className={`searchfield ${className}`}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Searchfield;
