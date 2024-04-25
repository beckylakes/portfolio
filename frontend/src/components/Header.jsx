import React from "react";
import NameLogo from "./NameLogo";
import NavigationButtons from "./NavigationButtons";

const Header = () => {
  return (
    <div className="header">
      <NameLogo />
      <NavigationButtons/>
    </div>
  );
};

export default Header;
