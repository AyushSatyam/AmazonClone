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
import { LoginContext } from "./context/LoginContext";
import { useContext } from "react";
import Product from "./component/screens/products/electronicProducts/electronicsProductPage/productInformationPage/Product";
import Electronics from "./component/screens/products/electronicProducts/electronicsProductPage/Electronics";

function App() {
  const { loggedIn } = useContext(LoginContext);
  return (
    <Router>
      <div className="App">
        <Switch>
          {loggedIn === false ? (
            <Route path="/login">
              <Login />

              <Footer />
            </Route>
          ) : (
            <Route path="/">
              <NavBar />

              <Home />
            </Route>
          )}
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
          <Route path="/electronics">
            <NavBar />
            {/* <Electronics /> */}
            <Electronics />
          </Route>
          <Route path="/product/electronic/1234">
            <NavBar />
            <Product />
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
