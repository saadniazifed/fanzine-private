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
        <Nav className={`ms-auto justify-content-end`} >
          <Nav.Link href="#" className="text-white">Football</Nav.Link>
          <Nav.Link href="#" className="text-white">Cricket</Nav.Link>
          <Nav.Link href="#" className="text-white">NFL</Nav.Link>
          <Nav.Link href="#" className="text-white">NBA</Nav.Link>
          <Nav.Link href="#" className="text-white">MLB</Nav.Link>
          <Nav.Link href="#" className="text-white">NFTs</Nav.Link>
          <Nav.Link href="#" className="text-white">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default FanzineNavbar;
