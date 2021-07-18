import React, { FC } from "react";
import Searchfield from "./searchfield";
import Button from "./button";

interface Props {
  className?: string;
  onSearch?: () => void;
  placeholder: string;
}

const Searchbox: FC<Props> = ({
  children,
  className,
  onSearch,
  placeholder,
}) => {
  return (
    <div className={`searchbox ${className}`}>
      <Searchfield placeholder={placeholder} />
      <Button
        className={`searchbox__button-submit`}
        onClick={onSearch}
      >{`Search`}</Button>
      {children}
    </div>
  );
};

export default Searchbox;
