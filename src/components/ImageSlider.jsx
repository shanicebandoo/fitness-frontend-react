import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';

const images = [
    'https://media.istockphoto.chom/id/638029262/photo/young-woman-pulling-rope-at-gym.jpg?s=612x612&w=0&k=20&c=Br72zSECQkj5TAmv6asPuoIboNgCbC-ZEal2oy4qmMw=',
    'https://media.istockphoto.com/id/1471564981/photo/modern-gym-interior-with-exercise-bikes-treadmills-halters-and-sports-equipments.jpg?s=612x612&w=0&k=20&c=bjFEPo6DoM_BPwfaFw0YGqQpbXLSuuDMG60KdNiQsNE=',
    'https://media.istockphoto.com/id/1289416200/photo/athletic-woman-doing-the-full-body-cardio-workout.jpg?s=612x612&w=0&k=20&c=IKxEnR8Jb_iJ8wv91C1NkrmMq_OfFxWII1aJFVZJTRo=',
    'https://www.shutterstock.com/image-illustration/abstract-hologram-gradient-bright-colors-260nw-1992872606.jpg'
];

const ImageSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <div className="image-slider">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slider-container">
              <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default ImageSlider;