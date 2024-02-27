import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/product" Component={Dashboard} />
          <Route path="/cart"  Component={CartDetail}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
