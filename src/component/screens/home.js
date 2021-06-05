import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row,
  Col,
} from "reactstrap";
import HomeCard from "./homeCard";
// import "../images";
const cardText = [
  {
    id: 1,
    altText: "Card 1",
    img: "https://images.unsplash.com/photo-1501163268664-3fdf329d019f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGVsZWN0cm9uaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: "Up to 70% off | Electronics clearance store",
    button: false,
    linkText: "See more",
    linkhref: "/electronics",
  },
  {
    id: 2,
    altText: "Card 2",
    img: "https://images.unsplash.com/photo-1543168256-418811576931?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: "Everyday essentials",
    button: false,
    linkText: "See more",
    linkhref: "/electronics",
  },
  {
    id: 3,
    altText: "Card 3",
    img: "https://images.unsplash.com/photo-1501163268664-3fdf329d019f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGVsZWN0cm9uaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: "Styles for Men | Up to 70% off",

    button: false,
    linkText: "View all offers",
    linkhref: "/electronics",
  },
  {
    id: 4,
    altText: "",
    img: "",
    text: "Sign in for your best experience",
    button: true,
    linkText: "",
    linkhref: "/electronics",
  },
];
const items = [
  {
    id: 1,
    altText: "Slide 1",
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/June_21/Pantry/01_3RD-JUN-pc1x._CB667273035_.jpg",
  },
  {
    id: 2,
    altText: "Slide 2",
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/PSS/Personal-Safety_1500x600._CB668022827_.jpg",
  },
  {
    id: 3,
    altText: "Slide 3",
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/OnePlusNordNewLaunch/2ndJune/GW/Revised/Nord_June_2CS_1500x600._CB667250719_.jpg",
  },
  {
    id: 4,
    altText: "Slide 4",
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Flip/Essentials_Experience_May21/Revised_EE_Graphics/GW_PC_BUNK_1500x600._CB668893605_.jpg",
  },
  {
    id: 5,
    altText: "Slide 5",
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/DOM/Launch/1500x600_Hero-Tall_JPN._CB667281672_.jpg",
  },
  {
    id: 6,
    altText: "Slide 6",
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_SVA._CB667240774_.jpg",
  },
  {
    id: 7,
    altText: "Slide 7",
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/iQoo/iQOO_Z3/GW/1stJune/D23951818_WLM_iQOO_Z3_Launch_GW_Design_SIM_TallHero_1500x600._CB667332720_.jpg",
  },
];

const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        // tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.img} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <div>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            // directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            // directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
      <Row>
        {cardText.map((cardTextItem) => {
          return (
            <Col>
              <div className="home_card">
                <HomeCard
                  key={cardTextItem.id}
                  altText={cardTextItem.altText}
                  text={cardTextItem.text}
                  img={cardTextItem.img}
                  button={cardTextItem.button}
                  linkText={cardTextItem.linkText}
                  linkhref={cardTextItem.linkhref}
                />
              </div>
            </Col>
          );
        })}

        {/* <Col sm="4">
          <div className="home_card">
            <HomeCard />
          </div>
        </Col>
        <Col sm="4">
          <div className="home_card">
            <HomeCard />
          </div>
        </Col> */}
      </Row>
    </div>
  );
};

export default Home;
