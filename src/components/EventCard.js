import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 10px;
    border-radius: 8px;
    overflow: hidden;
`;

const CardImage = styled.img`
    width: 100%;
    height: 160px;
    object-fit: cover;
`;

const CardContent = styled.div`
    padding: 15px;
`;

const CardTitle = styled.h3`
    margin: 0;
    color: #333;
`;

const CardDetails = styled.div`
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
`;

const EventCard = ({ event }) => {
    return (
        <Card>
            <CardImage src={event.image} alt={event.name} />
            <CardContent>
                <CardTitle>{event.name}</CardTitle>
                <CardDetails>{event.description}</CardDetails>
                <CardDetails>{event.date} · {event.time}</CardDetails>
                <CardDetails>{event.location}</CardDetails>
                <CardDetails>{event.attendeesCount} going</CardDetails>
                {event.isFree && <CardDetails>Free</CardDetails>}
            </CardContent>
        </Card>
    );
};

export default EventCard;
