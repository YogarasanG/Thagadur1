import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './box.css';

function Slider() {

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '420px',
    width:'100%',
    borderRadius:"10px",
    
  };

  const img = [
    {
      image: '../images/img16.jpg',
   
    },
    {
      image: '../images/img29.png',
   
    },
    {
        image: '../images/img11.jpg',
    },
    {
        image: '../images/img28.png',
    }
  ];

  return (
    <div>
      <div className="slide-container">
        <Slide>
          {img.map((slideImage, index) => (
            <div key={index}>
              <div style={{ ...divStyle, backgroundImage: `url(${slideImage.image})` }}>
                </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Slider;
