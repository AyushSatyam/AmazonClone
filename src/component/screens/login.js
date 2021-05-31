import React from "react";
import { Col, Form, FormGroup, Label, Input, Button, Row } from "reactstrap";
import "../css/Header.css";
function Login(props) {
  return (
    <div className="login_form">
      <div className="login_form_img">
        <img
          src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png"
          alt="Amazon Logo"
          style={{ width: "150px", height: "40px" }}
        />
      </div>
      <div className="login_form_box">
        <Form>
          <FormGroup>
            <Label for="exampleEmail" size="md">
              Email or mobile phone number
            </Label>
            <Col>
              <Input type="email" name="email" id="exampleEmail" bsSize="md" />
            </Col>
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
          <Button color="primary" size="md" type="submit" block>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
