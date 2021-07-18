import React, { FC, ReactNode } from "react";

interface Props {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

const Button: FC<Props> = ({ className, onClick, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
