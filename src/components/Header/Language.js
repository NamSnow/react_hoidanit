import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

const Language = (props) => {
  return (
    <>
      <NavDropdown
        title="VietNam"
        id="collapsible-nav-dropdown"
        className="languages"
      >
        <NavDropdown.Item>English</NavDropdown.Item>
        <NavDropdown.Item>VietNam</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default Language;
