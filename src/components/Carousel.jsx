import React from "react";
import bgImg from "../assets/bg1.avif";
import bgImg2 from "../assets/b2.avif";
import { useEffect, useRef, useState } from "react";


const Carousel = () => {
const carouselRef = useRef(null);
const [activeIndex, setActiveIndex] = useState(0);
const [isPlaying, setIsPlaying] = useState(true);

const toggleCarousel = () => {
  const carouselNode = carouselRef.current;
  if (!carouselNode) return;

  if (isPlaying) {
    window.bootstrap.Carousel.getInstance(carouselNode)?.pause();
  } else {
    window.bootstrap.Carousel.getInstance(carouselNode)?.cycle();
  }
  setIsPlaying(!isPlaying);
};



useEffect(() => {
  const carouselNode = carouselRef.current;
  const handler = (e) => setActiveIndex(e.to);

  carouselNode?.addEventListener("slid.bs.carousel", handler);

  return () => {
    carouselNode?.removeEventListener("slid.bs.carousel", handler);
  };
}, []);

  useEffect(() => {
    const isSmallScreen = window.innerWidth < 768;
    const carousel = carouselRef.current;

    if (carousel && window.bootstrap) {
      const carouselInstance = window.bootstrap.Carousel.getInstance(carousel) 
        || new window.bootstrap.Carousel(carousel, {
          interval: isSmallScreen ? false : 3000, // Auto-slide on large, disable on small
          ride: isSmallScreen ? false : 'carousel',
          pause: 'hover',
        });

      if (isSmallScreen) {
        carouselInstance.pause();
      } else {
        carouselInstance.cycle();
      }
    }
  }, []);


return (
  <div className="container-fluid p-0">
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
      ref={carouselRef}
    >
      <div className="carousel-inner">
        <div className="carousel-item active" >
          <img src={bgImg} className="d-block w-100" alt="..." />
          <div className="content">
            <h2>Meet the Surface Laptop</h2>
            <p className="fs-16">
              Unlock AI features like Live Captions and Cocreator with this
              exceptionally powerful laptop.
            </p>
            <button className="btn btn-primary">Learn more</button>
          </div>
          <div className="d-lg-none mt-2 border shadow"></div>
        </div>
        <div className="carousel-item">
          <img src={bgImg2} className="d-block w-100" alt="..." />
          <div className="content-2">
            <h2>Achieve the extraordinary</h2>
            <p className="fs-16">
              Microsoft 365 delivers cloud storage, security and Microsoft
              Copilot in your favourite apps – all in one plan.
            </p>
            <button className="btn btn-primary">Shop microSoft 365</button>
          </div>
           <div className="d-lg-none mt-2 border shadow"></div>
        </div>
      </div>
    </div>

    {/* paggignation */}
    <div className="d-flex gap-4 align-items-center justify-content-center mt-3 paggignation">
      <button
        onClick={toggleCarousel}
        className="btn btn-secondary bg-none d-flex align-items-center gap-2 play-btn"
      >
        <i className={`fa-solid ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
      </button>

      <button
        className="arrow"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <i class="fa-solid fa-angle-left fa-2x hover-move-left"></i>
      </button>

      {[0, 1].map((index) => (
        <button
          key={index}
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={index}
          className={activeIndex === index ? "active" : ""}
        />
      ))}
      <button
        className="arrow"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <i class="fa-solid fa-angle-right fa-2x hover-move-right"></i>
      </button>
    </div>
  </div>
);
};

export default Carousel;
