import React from "react";
import ElectronicsRight from "./ElctronicsRight";
import ElectronicsLeft from "./ElectronicsLeft";
import { Col, Row } from "reactstrap";

export default function Electronics(props) {
  const leftLink = [
    { link: "Electronics" },
    { link: "Computers & Accessories" },
    { link: "Luggage & Bags" },
    { link: "Video Games" },
    { link: "Office Products" },
    { link: "Car & Motorbike" },
    { link: "Home & Kitchen" },
    { link: "Sports, Fitness & Outdoors" },
    { link: "Musical Instruments" },
    { link: "Industrial & Scientific" },
  ];
  return (
    <div className="electronics">
      <Row>
        <Col className="electronics_left_col" sm="2">
          <div style={{ fontWeight: "bold" }}>Department</div>
          {leftLink.map((link) => (
            <ElectronicsLeft link={link.link} />
          ))}
        </Col>
        <div className="col-10">
          <ElectronicsRight />
        </div>
      </Row>
    </div>
  );
}
