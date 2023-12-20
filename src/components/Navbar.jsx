import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";

function NavScroll() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">StarWars Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Personajes</Nav.Link>
            <NavDropdown title="Peliculas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Triologia Original
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Segunda Triologia
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Disney Saga</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Precios
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default NavScroll;
