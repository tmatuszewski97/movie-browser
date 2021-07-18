import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Props {
  className?: string;
  onClick?: () => void;
  icon: IconDefinition;
}

const Icon: FC<Props> = ({ className, onClick, icon }) => {
  return (
    <FontAwesomeIcon
      className={`icon ${className}`}
      onClick={onClick}
      icon={icon}
    />
  );
};

export default Icon;
