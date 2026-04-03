import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation, Trans } from "react-i18next";

const Language = (props) => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    console.log(i18n.language);
  };

  return (
    <>
      <NavDropdown
        title={i18n.language === "vi" ? "VietNam" : "English"}
        id="collapsible-nav-dropdown"
        className="languages"
      >
        <NavDropdown.Item onClick={() => handleChangeLanguage("en")}>
          English
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleChangeLanguage("vi")}>
          VietNam
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default Language;
