// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./component/screens/cart";
import NavBar from "./component/NavBar";
import Home from "./component/screens/home";
import Prime from "./component/screens/prime";
import Order from "./component/screens/order";
import Footer from "./component/footer";
import Login from "./component/screens/login/login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
            <Footer />
          </Route>
          <Route path="/checkout">
            <NavBar />
            <Cart />
          </Route>
          <Route path="/orders">
            <NavBar />
            <Order />
          </Route>
          <Route path="/prime">
            <Prime />
          </Route>
          <Route path="/">
            <NavBar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
