import React from "react";
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  FormText,
} from "reactstrap";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import "../css/Header.css";
import { Link } from "@material-ui/core";
function Login(props) {
  return (
    <div className="login_form">
      <div className="login_form_img">
        <img
          src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png"
          alt="Amazon Logo"
          style={{ width: "130px", height: "40px" }}
        />
      </div>
      <div className="login_form_box">
        <Form>
          <p className="form_text">Sign-In </p>
          <FormGroup>
            <Label className="input_form_label">
              Email or mobile phone number
            </Label>

            <Input type="email" name="email" className="input_form" />
          </FormGroup>
          {/* <FormGroup row>
          <Label for="exampleEmail2" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="exampleEmail2"
              placeholder="default"
            />
          </Col>
        </FormGroup> */}
          <Button className="form_button" size="sm" type="submit" block>
            Submit
          </Button>
          <p className="span_form">
            By continuing, you agree to Amazon's <Link>Conditions of Use</Link>{" "}
            and <Link>Privacy Notice.</Link>
          </p>
          <Col className="span_form need_help">
            <ArrowRightIcon />
            <Link>Need Help?</Link>
          </Col>
        </Form>
      </div>
      <div className="new_to_amazon_form">
        <hr className="hr_new_to_amazon_form" />
        <p className="p_new_to_amazon_form">New to Amazon?</p>
        <hr className="hr_new_to_amazon_form" />
      </div>
      <Button
        className="create_new_account_button"
        size="sm"
        type="submit"
        block
      >
        Create your Amazon account
      </Button>
    </div>
  );
}

export default Login;
