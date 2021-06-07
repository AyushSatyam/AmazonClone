import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Label,
  Input,
  ButtonDropdown,
  CardImg,
  CardImgOverlay,
} from "reactstrap";
import "../../../../login/css/login.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function ProductRightLast(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [lastClicked, setLastClicked] = useState(1);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            Quantity:{" "}
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>{lastClicked}</DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => setLastClicked(1)}>1</DropdownItem>
                <DropdownItem onClick={() => setLastClicked(2)}>2</DropdownItem>
                <DropdownItem onClick={() => setLastClicked(3)}>3</DropdownItem>
                <DropdownItem onClick={() => setLastClicked(4)}>4</DropdownItem>
                <DropdownItem onClick={() => setLastClicked(5)}>5</DropdownItem>
                <DropdownItem onClick={() => setLastClicked(6)}>6</DropdownItem>
                <DropdownItem onClick={() => setLastClicked(7)}>7</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </CardTitle>
          <Button
            className="form_button"
            size="sm"
            type="submit"
            block
            // onClick={this.props.onClick}
          >
            Add to Cart
          </Button>
          <Button
            className="form_button"
            size="sm"
            type="submit"
            block
            // onClick={this.props.onClick}
          >
            Buy Now
          </Button>
          <p>Secure Transaction</p>
          <Label check>
            <Input type="checkbox" /> Add gift options
          </Label>
          {/* <img width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
          <Link>Deliver to Ayush- Alleppey 688504</Link>
          <hr />
          <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Button Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <div style={{ display: "flex" }}>
            <div>
              <CardTitle tag="h5">New (7) from</CardTitle>

              <CardLink>399.00 FREE Delivery.</CardLink>
            </div>
            <div>
              <ArrowForwardIosIcon />
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardTitle tag="h5">Other Sellers on Amazon</CardTitle>
        <CardBody>
          <div style={{ display: "flex" }}>
            <div>
              <CardText tag="h5">New (7) from</CardText>

              <CardLink>399.00 FREE Delivery.</CardLink>
            </div>
            <div>
              <Button
                className="form_button"
                size="sm"
                type="submit"
                block
                // onClick={this.props.onClick}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </CardBody>
        <CardBody>
          <div style={{ display: "flex" }}>
            <div>
              <CardText tag="h5">New (7) from</CardText>

              <CardLink>399.00 FREE Delivery.</CardLink>
            </div>
            <div>
              <Button
                className="form_button"
                size="sm"
                type="submit"
                block
                // onClick={this.props.onClick}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card inverse>
        <CardLink href="#">
          <CardImg
            width="100%"
            src="https://m.media-amazon.com/images/I/41vskMbKgLL.gif"
            alt="Card image cap"
          />
        </CardLink>
      </Card>
    </div>
  );
}
