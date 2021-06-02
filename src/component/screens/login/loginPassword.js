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
// import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./css/login.css";
import { Link } from "@material-ui/core";
class LoginPassword extends React.Component {
  render() {
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
            <p className="login_pass_p">
              {this.props.email}
              <Link className="login_pass_p_link">Change</Link>
            </p>
            <FormGroup>
              <div className="login_password">
                <Label className="input_form_label">Password</Label>
                <Link>Forgot Password</Link>
              </div>

              <Input
                type="password"
                name="password"
                className="input_form"
                onChange={this.props.onChange}
              />
              {console.log("Email", this.props.email)}
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
            <Button
              className="form_button"
              size="sm"
              type="submit"
              block
              onClick={this.props.onClick}
            >
              Sign-In
            </Button>
            {/* <p className="span_form">
              By continuing, you agree to Amazon's{" "}
              <Link>Conditions of Use</Link> and <Link>Privacy Notice.</Link>
            </p> */}
            {/* <Col className="span_form need_help">
              <ArrowRightIcon />
              <Link>Need Help?</Link>
            </Col> */}
            <FormGroup>
              <div className="login_password_check">
                <Label>
                  <Input type="checkbox" /> Keep me signed in.
                </Label>
                <div className="login_password_check_details">
                  <Link>Details</Link>
                  <ArrowDropDownIcon />
                </div>
              </div>
            </FormGroup>
          </Form>
        </div>
        <div className="new_to_amazon_form">
          <hr className="hr_new_to_amazon_form" />
          <p className="p_new_to_amazon_form">or</p>
          <hr className="hr_new_to_amazon_form" />
        </div>
        <Button className="create_new_account_button" type="submit">
          Get an OTP on your phone
        </Button>
      </div>
    );
  }
}

export default LoginPassword;
