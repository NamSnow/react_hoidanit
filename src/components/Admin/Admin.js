import React, { useState } from "react";
import SideBar from "./SideBar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { BrowserRouter, Link, Outlet } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import Language from "../Header/Language";
import { NavDropdown } from "react-bootstrap";

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar collapsed={collapsed} />
      </div>

      <div className="admin-content">
        <div className="admin-header">
          <span>
            <FaBars
              onClick={() => setCollapsed(!collapsed)}
              className="leftside"
            />
          </span>

          <div className="rightside">
            <Language />

            <NavDropdown title="Setting" id="collapsible-nav-dropdown">
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item>Log out</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>

        <div className="admin-main">
          <PerfectScrollbar>
            <Outlet />
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};

export default Admin;
