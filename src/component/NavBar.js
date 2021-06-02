import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Col,
  Row,
} from "reactstrap";
import "./css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
class NavBar extends React.Component {
  render() {
    return (
      <Navbar color="dark">
        <NavbarBrand href="/">
          <img
            className="nav_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="NavLogo"
            // style={{ width: "100px" }}
          ></img>
        </NavbarBrand>
        <Nav className="justify-content-end">
          <div className="nav_search">
            <input type="text" className="nav_search_input" />
            <SearchIcon className="nav_search_icon" />
          </div>

          <NavItem>
            <NavLink href="/login" className="nav_link">
              <div className="nav_option">
                <span className="header_option_lineone">Hello, Sing in</span>
                <span className="header_option_linesecond">
                  Account &amp; Lists
                </span>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/orders" className="nav_link">
              <div className="nav_option">
                <span className="header_option_lineone">Returns</span>
                <span className="header_option_linesecond">&amp; Orders</span>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/prime" className="nav_link">
              <div className="nav_option">
                <span className="header_option_lineone">Your</span>
                <span className="header_option_linesecond">Prime</span>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/checkout" className="nav_link">
              <ShoppingBasketIcon />
              <span className="counter" style={{ fontWeight: "bold" }}>
                0
              </span>
            </NavLink>
          </NavItem>
          {/* <div className="nav_item_class"></div> */}
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
