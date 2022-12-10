import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Мой первый сайт на реакте</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Аниме</Nav.Link>
            <Nav.Link href="#action2">Манхва</Nav.Link>
            <NavDropdown title="Хобби" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">аниме</NavDropdown.Item>
              <NavDropdown.Item href="#action4">сериалы</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Дзюдо</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://makers.kg/" disabled>
              ссылка на сайт макерс
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
