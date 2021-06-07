import React, { useContext } from "react";
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
import { ProductTechnicalDetailsContext } from "../../../../../../context/ProductContext";
import { ProductAdditionalInformationContext } from "../../../../../../context/ProductAdditionalInformationContext";
function Product(props) {
  const {
    Brand,
    Manufacturer,
    Model,
    ModelName,
    ModelYear,
    ProductDimensions,
    ItemModelNumber,
    CompatibleDevices,
    SpecialFeatures,
    MountingHardware,
    NumberOfItems,
    MicrophoneFormFactor,
    HeadphonesFormFactor,
    BatteriesIncluded,
    BatteriesRequired,
    ConnectorType,
    ManufacturerName,
    CountryOfOrigin,
    ItemWeight,
    ProductName,
  } = useContext(ProductTechnicalDetailsContext);
  const {
    ASIN,
    CustomerReviewsStart,
    CustomerReviewsRating,
    BestSellersRank,
    DateFirstAvailable,
    Importer,
    ItemDimensionsLxWxH,
    NetQuantity,
  } = useContext(ProductAdditionalInformationContext);
  return (
    <div>
      <Row>
        <Col sm="6">
          <ProductUpLeft />
        </Col>
        <Col sm="4">
          <ProductUpRight
            brand={Brand}
            manufacturer={Manufacturer}
            model={Model}
            modelName={ModelName}
            modelYear={ModelYear}
            productDimensions={ProductDimensions}
            itemModelNumber={ItemModelNumber}
            compatibleDevices={CompatibleDevices}
            specialFeatures={SpecialFeatures}
            mountingHardware={MountingHardware}
            numberOfItems={NumberOfItems}
            microphoneFormFactor={MicrophoneFormFactor}
            headphonesFormFactor={HeadphonesFormFactor}
            batteriesIncluded={BatteriesIncluded}
            batteriesRequired={BatteriesRequired}
            connectorType={ConnectorType}
            manufacturerName={ManufacturerName}
            countryOfOrigin={CountryOfOrigin}
            itemWeight={ItemWeight}
            productName={ProductName}
            asin={ASIN}
            customerReviewsStart={CustomerReviewsStart}
            customerReviewsRating={CustomerReviewsRating}
            bestSellersRank={BestSellersRank}
            dateFirstAvailable={DateFirstAvailable}
            importer={Importer}
            itemDimensionsLxWx={ItemDimensionsLxWxH}
            netQuantity={NetQuantity}
          />
        </Col>
        <Col sm="2">
          <ProductRightLast />
        </Col>
      </Row>
      <hr />
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

export default Product;
