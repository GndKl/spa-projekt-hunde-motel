import { useState } from "react";
import "./Gallerie.css";

const images = [
  "/images/dachshund.jpg",
  "/images/dog1.webp",
  "/images/dog2.jpg",
  "/images/dog3.jpg",
  "/images/megi.jpg",
  "/images/dog4.jpg",
  "/images/dog5.jpg",
  "/images/dog6.jpg",
  "/images/dog7.jpg",
  "/images/dog8.jpg",
  "/images/dog9.jpg",
  "/images/dog10.jpg",
  "/images/dog11.jpg",
  "/images/dog14.jpg",
  "/images/dog15.jpg",
  "/images/pik1.jpg",
  "/images/pik2.jpg",
  "/images/dog12.jpeg",
  "/images/dog13.jpeg",
];
const Gallerie = () => {
  const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
      setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevImage = () => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
      <div className="carousel">
        <button onClick={prevImage} className="carousel-button prev-button">
          Prev
        </button>
        <img
          src={images[currentIndex]}
          alt={`carousel-${currentIndex}`}
          className="carousel-image"
        />
        <button onClick={nextImage} className="carousel-button next-button">
          Next
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1>Gallerie</h1>
      <Carousel images={images} />
    </div>
  );
};

export default Gallerie;
