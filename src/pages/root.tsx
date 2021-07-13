import React, { FC } from "react";
import { Navbar } from "../components";

const RootView: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default RootView;
