import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  ProSidebarProvider,
} from "react-pro-sidebar";

import { FaGem } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import sidebarBg from "../../assets/bg2.jpg";
import "./SideBar.scss";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  const { image, collapsed, toggled, handleToggleSidebar } = props;
  return (
    <ProSidebarProvider>
      <Sidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <DiReact size={"3em"} color={"00bfff"} />
          <span>Hoi Dan IT</span>
        </div>

        <Menu iconShape="circle">
          <MenuItem icon={<MdDashboard />} component={<Link to="/admin" />}>
            Dashboard
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu icon={<FaGem />} label="Features">
            <MenuItem component={<Link to="/admin/manage-users" />}>
              {" "}
              Quản lý Users
            </MenuItem>
            <MenuItem component={<Link to="/calendar" />}>
              {" "}
              Quản lý Bài Quiz
            </MenuItem>
            <MenuItem component={<Link to="/calendar" />}>
              {" "}
              Quản lý Câu Hỏi
            </MenuItem>
          </SubMenu>
        </Menu>

        <div style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://haryphamdev.github.io/hoidanit-udemy/"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                &#169; Hỏi Dân IT Udemy
              </span>
            </a>
          </div>
        </div>
      </Sidebar>
    </ProSidebarProvider>
  );
};

export default SideBar;
