// import "react-pro-sidebar/dist/css/styles.css";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  ProSidebarProvider,
} from "react-pro-sidebar";

import {
  FaTachometerAlt,
  FaGem,
  FaGithub,
  FaRegLaughWink,
} from "react-icons/fa";
import sidebarBg from "../../assets/bg2.jpg";
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";

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
          <DiReact size={"3em"} color={"#00bfff"} />
          {!collapsed && <span>Hoi Dan IT</span>}
        </div>

        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">New</span>}
          >
            Dashboard
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            icon={<FaRegLaughWink />}
            label="Features"
          >
            <MenuItem>Quản lý Users</MenuItem>
            <MenuItem>Quản lý Bài Quiz</MenuItem>
            <MenuItem>Quản lý Câu Hỏi</MenuItem>
          </SubMenu>
        </Menu>

        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
            textAlign: "center",
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
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
              &#169; {!collapsed && <span>Hoi Dan IT Udemy</span>}
            </span>
          </a>
        </div>
      </Sidebar>
    </ProSidebarProvider>
  );
};

export default SideBar;
