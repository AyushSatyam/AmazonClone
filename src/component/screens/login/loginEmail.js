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
import { Link } from "@material-ui/core";
import "./css/login.css";
// import LoginPassword from "./loginPassword";
// function clickContinue(props) {
//   this.setState({ count: 1 });
// }

class LoginEmail extends React.Component {
  //   const count = 0;
  //   const count = this.props;
  //   countFunction() {
  //     this.setState({
  //       count: 1,
  //     });
  //   }
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
            <FormGroup>
              <Label className="input_form_label">
                Email or mobile phone number
              </Label>

              <Input
                type="email"
                name="email"
                onChange={this.props.onChange}
                className="input_form"
                // value={this.props.name}
              />
              {/* {console.log(this.props.email)} */}
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
              Continue
            </Button>
            <p className="span_form">
              By continuing, you agree to Amazon's{" "}
              <Link>Conditions of Use</Link> and <Link>Privacy Notice.</Link>
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
        <Button className="create_new_account_button" type="submit">
          Create your Amazon account
        </Button>
      </div>
    );
  }
}

export default LoginEmail;
