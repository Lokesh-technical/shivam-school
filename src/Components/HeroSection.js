import React from "react";
import HeroImage from "../assets/img/carousel-1.jpg";
import Image from "next/image";
import SchoolImg from "../assets/img/school/newHero.png";
import frontViewSchool from "../assets/img/school/Front_view_school.jpg"
import playGround from "../assets/img/school/Play_ground.jpg"


import { Carousel } from "react-bootstrap";

const HeroSection = () => {
  return (
    <>
      <div>
        {/* <h2>Welcome to Shivam Vidhyalay</h2> */}
        <Carousel data-bs-theme="dark" variant="dark">
          <Carousel.Item>
            <Image
              class="img-fluid"
              src={SchoolImg}
              alt={SchoolImg}
              style={{ width: "100%" }}
              loading="lazy"
            />
            <Carousel.Caption >
            <h1 style={{backgroundColor: "#FE5D37", opacity:  0.9 , color: "white"}}>Welcome to Shivam Vidhyalay</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              class="img-fluid"
              src={frontViewSchool}
              alt={frontViewSchool}
              style={{ width: "100%" }}
              loading="lazy"
            />
            <Carousel.Caption>
            <h1 style={{backgroundColor: "#FE5D37", opacity:  0.9 , color: "white"}}>Welcome to Shivam Vidhyalay</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              class="img-fluid"
              src={playGround}
              alt={playGround}
              style={{ width: "100%" }}
              loading="lazy"
            />
            <Carousel.Caption>
            <h1 style={{backgroundColor: "#FE5D37", opacity:  0.9 , color: "white"}}>Welcome to Shivam Vidhyalay</h1>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Add more Carousel.Item components for additional slides */}
        </Carousel>
      </div>
    </>
  );
};

export default HeroSection;
