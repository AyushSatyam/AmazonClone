import React from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Table,
  UncontrolledCollapse,
  Button,
  CardBody,
  Card,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
export default function ProductUpRight(props) {
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>{props.productName}</p>
      <Link>Seller</Link>
      <p>{props.customerReviewsStart}</p>
      <Link>{props.customerReviewsRating}</Link>
      <Link>Question Count</Link>
      <p>
        M.R.P.:<span>2,999.00</span>
      </p>
      <p>
        Deal Price: <span>1,099.00</span>
      </p>
      <h6>
        <Badge color="secondary">Amazon Prime</Badge>
      </h6>
      <p>
        You Save:<span>1900.00(63%)</span>
      </p>
      <p>Inclusive all of taxes</p>
      <p>
        Free Delivery:{" "}
        <span>
          Sunday, June 13<Link>Details</Link>
        </span>
      </p>
      <p>
        EMI start at 399 per month.<Link>EMI options</Link>
      </p>
      <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>
          <Link color="primary" id="toggler" style={{ marginBottom: "1rem" }}>
            Show more
          </Link>
          <UncontrolledCollapse toggler="#toggler">
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </UncontrolledCollapse>
        </ListGroupItem>
      </ListGroup>
      <Row>
        <Col sm="3">
          <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png" />
          <p>Pay on Delivery</p>
        </Col>
        <Col sm="3">
          <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png  " />
          <p>7 Day Replacement</p>
        </Col>
        <Col sm="3">
          <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" />
          <p>Amazon Delivery</p>
        </Col>
        <Col sm="3">
          <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png" />
          <p>1 Year Warrenty</p>
        </Col>
      </Row>
      <hr />
      <p>
        Available at a lower price from <Link>other sellers</Link> that may not
        offer free Prime shipping.{" "}
      </p>
      <p>In Stock</p>
      <p>
        Sold by <Link>Appario Retail Private Ltd</Link> and
        <Link>Fulfilled by Amazon</Link> .{" "}
      </p>
      <p>
        {" "}
        <Link>
          New (2) from <span>₹ 1,099.00</span>
        </Link>{" "}
        + ₹ 80.00 Delivery charge{" "}
      </p>
      <p>
        Colour:<span>Black &amp; Yellow</span>
      </p>
      <Table style={{ border: "0px white" }}>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>the Bird</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>the Bird</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>the Bird</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>the Bird</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>the Bird</td>
          </tr>
        </tbody>
      </Table>
      <hr />
      <p>About this item</p>
      <ul>
        <li>Premium Metal Earbuds </li>
        <li>Flexsoft Neckband Frequency : 20 Hz - 20 KHz</li>{" "}
        <li>Impedance : 32 ohm.</li>{" "}
        <li>Driver Sensitivity (1KHz / 1mW):102±5dB</li>{" "}
        <li>Seamless Connectivity with Bluetooth V5.0</li>
        <li>7 Hours Music Playtime Under Optimum Audio Settings</li>{" "}
        <li>Dual Equalizer Modes for Normal &amp; Deep Bass output</li>{" "}
        <li>IPX5 Sweatproof</li> <li>12mm Dynamic driver</li>
        <Link color="primary" id="toggler" style={{ marginBottom: "1rem" }}>
          Show more
        </Link>
        <UncontrolledCollapse toggler="#toggler">
          <li>Hands-Free Calling with 3 Button Remote</li>
          <li>Voice Assistant Integration</li>
          <li>Country of Origin: China</li>
        </UncontrolledCollapse>
      </ul>
      <Link>Report incorrect product Information</Link>
      <hr />
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}
