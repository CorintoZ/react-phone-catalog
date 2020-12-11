import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import './PhoneCard.css';

function PhoneCard(props) {
  const { name, price, id, phoneImage } = props.phoneData;
  return (
    <Card className='card-box'>
      <Card.Img variant='top' width='286' height='286' src={phoneImage} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Link to={`/phones/${id}`}>
          <Button variant='primary'>Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default PhoneCard;
