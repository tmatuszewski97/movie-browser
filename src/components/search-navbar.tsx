import React, { FC } from "react";
import Searchbox from "./searchbox";
import Icon from "./icon";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

interface Props {
  onClose?: () => void;
  onSearch?: () => void;
  visible: boolean;
}

const SearchNavbar: FC<Props> = ({ onClose, onSearch, visible }) => {
  return visible ? (
    <>
      <Searchbox
        placeholder={`Search for a movie...`}
        className={`search-navbar`}
        onSearch={onSearch}
      >
        <Icon
          className={`search-navbar__icon`}
          icon={faTimesCircle}
          onClick={onClose}
        />
      </Searchbox>
    </>
  ) : null;
};

export default SearchNavbar;
