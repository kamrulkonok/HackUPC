import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCard from './EventCard';
import { SliderWrapper } from './EventListStyles';

const EventList = ({ events }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default EventList;
