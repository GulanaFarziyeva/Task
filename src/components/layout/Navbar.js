import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

const links = [
  {
    name: "Sifarişlərim",
    route: "/orders",
  },
  {
    name: "Yeni Sifariş",
    route: "/neworder",
  },
  {
    name: "Menu",
    route: "/",
  },
  {
    name: "Rezervasiya",
    route: "/",
  },
  {
    name: "Address",
    route: "/",
  },
  {
    name: <FaFacebookF />,
    route: "/",
  },
  {
    name: <FaInstagram />,
    route: "/",
  },
  {
    name: <FaTwitter />,
    route: "/",
  },
];

const NavbarMenu = () => {
  return (
    <Navbar expand="lg" className="navbar-menu nav-background" fixed="top">
      <Container className="navbar-menu__container">
        <Navbar.Brand>
          <LinkContainer to="/home">
            <Nav.Link href="home">
              <img
                className="navbar-menu__container__logo"
                src="https://static.spotapps.co/web/formasantamonica--com/custom/logo.png"
                alt="logo"
              />
            </Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0 navbar-menu__container__nav"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {links.map((link, index) => (
              <LinkContainer key={index} to={link.route}>
                <Nav.Link className="text-white navbar-menu__container__nav__link me-4 ">
                  {link.name}
                </Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
