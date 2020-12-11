import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import './PhoneCard.css';

function PhoneCard(props) {
  const { name, price, id, manufacturer, phoneImage } = props.phoneData;
  return (
    <Card className='card-box'>
      <Card.Img variant='top' src={phoneImage} />
      <Card.Body>
        <Card.Title>{name + ' - ' + manufacturer}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Link to={`/phones/${id}`}>
          <Button variant='primary'>Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default PhoneCard;
