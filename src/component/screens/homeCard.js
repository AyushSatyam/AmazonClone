// import React from 'react'

import React, { useContext } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardLink,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Login from "./login/login";
import { LoginContext } from "../../context/LoginContext";
// import "style-loader/css-loader/bootstrap/dist/css/bootstrap.css";
// const Example = (props) => {
//   return (

//   );
// };

function HomeCard(props) {
  const { loggedIn } = useContext(LoginContext);
  return (
    <Card className="home_card_card">
      <CardBody>
        <CardTitle
          tag="h4"
          style={{ fontWeight: "bold", marginBottom: "15px" }}
        >
          {props.text}
        </CardTitle>
        {/* <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle> */}
        <CardImg
          width="100%"
          src={props.img}
          alt={props.altText}
          style={{ zIndex: "10" }}
        />
      </CardBody>

      {/* <CardText>
            
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText> */}
      {/* <Button>Button</Button> */}
      <CardBody>
        {props.button === true && loggedIn === false ? (
          // <Button></Button>
          // <Button
          //   className="form_button"
          //   size="sm"
          //   type="submit"
          //   // block
          //   onClick={<Login />}
          // >
          //   Sign in securely
          // </Button>
          // {}
          <CardLink
            href="/login"
            className=" btn form_button"
            //  style={{ textDecoration: "none" }}
          >
            Sign in securely
          </CardLink>
        ) : (
          <CardLink href={props.linkhref} style={{ textDecoration: "none" }}>
            {props.linkText}
          </CardLink>
        )}
      </CardBody>
    </Card>
  );
}
export default HomeCard;
