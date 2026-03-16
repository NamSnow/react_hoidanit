import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="navbar-brand">
          Hoi Dan IT
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/user" className="nav-link">
              User
            </NavLink>
            <NavLink to="/admin" className="nav-link">
              Admin
            </NavLink>
          </Nav>

          <Nav>
            <button className="btn-login" onClick={() => handleLogin()}>
              Log in
            </button>
            <button className="btn-signup">Sign up</button>

            {/* <NavDropdown title="Setting" id="collapsible-nav-dropdown">
              <NavDropdown.Item>Log in</NavDropdown.Item>
              <NavDropdown.Item>Log out</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
