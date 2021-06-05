// import { Link } from "@material-ui/core";
import React from "react";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
export default function ElectronicsLeft(props) {
  return (
    <div>
      <KeyboardArrowLeftIcon />
      <a
        style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
        href={"/" + props.link.replace(/ /gi, "#").toLowerCase().trim()}
      >
        {props.link}
      </a>
    </div>
  );
}
