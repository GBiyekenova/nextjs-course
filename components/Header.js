import React from "react";
import Link from "next/link";

import headerStyles from "../styles/Header.module.css";

const Header = ({ children }) => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span>News
      </h1>
      <p className={headerStyles.description}>Keep up to date with the lates WebDev news</p>
    </div>
  );
};

export default Header;
