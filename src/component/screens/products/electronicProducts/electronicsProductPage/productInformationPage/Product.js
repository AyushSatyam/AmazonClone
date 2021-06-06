import React from "react";
import ProductBestSeller from "./productBestSeller";
import ProductBrandSuggestion from "./productBrandsSuggestion";
import ProductCustomerSuggestion from "./productCustomerSuggestion";
import ProductDetail from "./productDeatilInformation";
import ProductFeaturedItem from "./productFeaturedItem";
import ProductQuestion from "./productQuestion";
import ProductReview from "./productReview";
import ProductTechDetails from "./productTechDetails";
import ProductUpLeft from "./productUpLeft";
import ProductUpRight from "./productUpRight";
import { Col, Row } from "reactstrap";
import ProductRightLast from "./productRigthLast";
export default function Product(props) {
  return (
    <div>
      <Row>
        <Col sm="6">
          <ProductUpLeft />
        </Col>
        <Col sm="4">
          <ProductUpRight />
        </Col>
        <Col sm="2">
          <ProductRightLast />
        </Col>
      </Row>
      {/*  */}

      {/*  */}
      {/* </div> */}
      <div>
        <ProductFeaturedItem />
        <ProductCustomerSuggestion />
        <ProductBrandSuggestion />
        <ProductDetail />
        <ProductTechDetails />
        <ProductQuestion />
        <ProductReview />
        <ProductBestSeller />
      </div>
    </div>
  );
}
