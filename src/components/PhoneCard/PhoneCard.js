import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import './PhoneCard.css';

function PhoneCard(props) {
  const { name, price, imageUrl, id } = props.phoneData;
  return (
    <Card className='card-box'>
      <Card.Img
        variant='top'
        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wccftech.com%2Fwp-content%2Fuploads%2F2016%2F09%2FiPhone-7-9.jpg'
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Link to={`/phones/${id}`}>
          <Button variant='primary'>Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default PhoneCard;
