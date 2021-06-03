import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
// import "../images";
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
        tag="div"
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
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`}
      </style>
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
  );
};

export default Home;
