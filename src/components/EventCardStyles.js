import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const CardContent = styled.div`
  padding: 15px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-weight: bold;
  color: #333;
`;

export const CardText = styled.p`
  color: #666;
  font-size: 14px;
`;
