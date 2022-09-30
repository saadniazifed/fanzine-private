import FanzineNavbar from "components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Football from "Pages/Football/Football";
import Cricket from "Pages/Cricket/Cricket";
import NBA from "Pages/NBA/NBA";
import NFL from "Pages/NFL/NFL";
import MLB from "Pages/MLB/MLB";

//React Router ka setup.

function App() {
  return (
    <>
      <FanzineNavbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/football" element={<Football />}></Route>
        <Route exact path="/cricket" element={<Cricket />}></Route>
        <Route exact path="/nba" element={<NBA />}></Route>
        <Route exact path="/nfl" element={<NFL />}></Route>
        <Route exact path="/mlb" element={<MLB />}></Route>
        {/* <Route exact path="/contact" element={<Contact />}></Route> */}
      </Routes>

    </>
  );
}

export default App;
