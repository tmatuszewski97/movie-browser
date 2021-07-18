import React, { FC } from "react";
import { Navbar } from "../components";

const RootPage: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default RootPage;
