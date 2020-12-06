import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PhoneCard from '../PhoneCard/PhoneCard';

function PhoneList(props) {
  const phoneList = props.phoneList;
  return (
    <Container fluid>
      <Row>
        {phoneList.map((phone) => {
          return <PhoneCard key={phone.id} phoneData={phone}></PhoneCard>;
        })}
      </Row>
    </Container>
  );
}

export default PhoneList;
