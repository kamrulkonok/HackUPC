import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

// Import images if they are local
import barcelona from '../images/barcelona.jpeg';
import bilbao from '../images/bilbao.jpeg';
import sanbartolome from '../images/sanbartolome.jpeg';
import santorini from '../images/santorini.jpeg';
import malaga from '../images/malaga.jpeg';

// Styled components
const CarouselContainer = styled.div`
  padding: 20px;
`;

const DestinationItem = styled.div`
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }
`;

const DestinationImage = styled.div`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background-image: url(${props => props.image});
`;

const DestinationInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 10%, transparent);
  color: white;
  padding: 20px 15px;
  text-align: left;

  h3 {
    margin: 0;
    font-size: 18px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
  }
`;



// Data for the carousel
const destinations = [
  { name: "Barcelona", country: "Spain", image: barcelona },
  { name: "Bilbao", country: "Spain", image: bilbao },
  { name: "San Bartolome de Tirajana", country: "Spain", image: sanbartolome },
  { name: "Santorini", country: "Greece", image: santorini },
  { name: "Málaga", country: "Spain", image: malaga }
];

const DestinationCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {destinations.map(destination => (
          <DestinationItem key={destination.name}>
            <DestinationImage image={destination.image}>
              <DestinationInfo>
                <h3>{destination.name}</h3>
                <p>{destination.country}</p>
              </DestinationInfo>
            </DestinationImage>
          </DestinationItem>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default DestinationCarousel;
