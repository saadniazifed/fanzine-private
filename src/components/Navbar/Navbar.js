import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import fanzine from "assets/Images/fanzine.png";
import styles from "components/Navbar/Navbar.module.css";

function FanzineNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="my-auto">
        <Navbar.Brand href="#" as="h1">
          <Container className={styles.fitImageNavbar}>
            <img src={fanzine} alt="brand-logo" />
          </Container>
        </Navbar.Brand>

        <Navbar.Toggle id="basic-navbar-nav"></Navbar.Toggle>
        <Nav className=" ms-auto flex-grow-1 justify-content-around">
          <Nav.Link href="#">Football</Nav.Link>
          <Nav.Link href="#">Cricket</Nav.Link>
          <Nav.Link href="#">NFL</Nav.Link>
          <Nav.Link href="#">NBA</Nav.Link>
          <Nav.Link href="#">MLB</Nav.Link>
          <Nav.Link href="#">NFTs</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default FanzineNavbar;
