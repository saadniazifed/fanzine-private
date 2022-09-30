import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import fanzine from "assets/Images/fanzine.png";
import styles from "components/Navbar/Navbar.module.css";
import { NavLink } from "react-router-dom";



function FanzineNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="my-auto">
        <Navbar.Brand href="#" as="h1">
          <Container className={styles.fitImageNavbar}>
            <NavLink to='/'>
              <img src={fanzine} alt="brand-logo" />
            </NavLink>
          </Container>
        </Navbar.Brand>

        <Navbar.Toggle id="basic-navbar-nav"></Navbar.Toggle>
        <Nav className={`d-flex w-75 justify-content-evenly`} >
          <NavLink to='/football' className="text-white text-decoration-none">Football</NavLink>
          <NavLink to='/cricket' className="text-white text-decoration-none">Cricket</NavLink>
          <NavLink to='/nba' className="text-white text-decoration-none">NBA</NavLink>
          <NavLink to='/nfl' className="text-white text-decoration-none">NFL</NavLink>
          <NavLink to='/mlb' className="text-white text-decoration-none">MLB</NavLink>
          <NavLink to='/contact' className="text-white text-decoration-none">Contact</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default FanzineNavbar;
