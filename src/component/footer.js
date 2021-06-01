import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
function Footer() {
  return (
    <div className="footer">
      <hr className="footer_hr" />
      <div className="footer_link">
        <Link className="footer_link_text">Conditions of use</Link>
        <Link className="footer_link_text">Privacy Notice</Link>
        <Link className="footer_link_text">Help</Link>
      </div>
      <p className="footer_paragraph">
        &copy; 1996-2021, Amazon.com, Inc. or it's affiliates
      </p>
    </div>
  );
}

export default Footer;
