"use client"
import { useState, useEffect } from 'react';
import "./SlideShow.css"

const images = [
    "https://media.istockphoto.com/id/924512692/photo/blurred-defocused-background-of-public-exhibition-hall-business-tradeshow-or-stock-market.jpg?s=2048x2048&w=is&k=20&c=6MS08dC0_Z55hU91kOX3lkvYyxima2eYZwWs1i1Wqj0=",
    "https://res.cloudinary.com/dzvdkjmm7/image/upload/v1687347663/Petabyte-eSports/aca-img2_vr2kjl.jpg",
    "https://media.istockphoto.com/id/1490353424/photo/a-man-playing-online-game-in-blue-lit-room.jpg?s=2048x2048&w=is&k=20&c=J5ldlowZ8Rw9z8AHK8cK78ootTm6qadf8YEYVCrDxk4=",
    "https://media.istockphoto.com/id/1218726691/photo/the-guy-gamer-with-headphones-playing-video-games-in-the-dark-room.jpg?s=2048x2048&w=is&k=20&c=9yNtqcyZiBWvek6_IKFvUBtsYNDn0Tcs1_NeJ739S8s=",
  // Add more image file names here
];

function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Advance to the next image, or loop back to the first image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="slideshow-container mx-auto w-[80vw] h-[5rem] lg:h-[40vw]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img className='h-[100%] w-[100%] ' src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default SlideShow;
