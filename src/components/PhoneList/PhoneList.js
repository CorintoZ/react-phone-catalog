import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import PhoneCard from '../PhoneCard/PhoneCard';
import { connect } from 'react-redux';
import { fetchPhones } from '../../store/actions/phoneActions';
import { compose } from 'redux';
import { Spinner } from 'react-bootstrap';
import './PhoneList.css';

function PhoneList({ phoneList, fetchPhones }) {
  useEffect(() => {
    fetchPhones();
  }, [fetchPhones]);
  console.log(phoneList);
  return (
    <Container fluid>
      <Row className='justify-content-md-center'>
        {phoneList.length ? (
          phoneList.map((phone) => {
            return <PhoneCard key={phone.id} phoneData={phone}></PhoneCard>;
          })
        ) : (
          <Spinner className='spinner' animation='border' variant='primary' />
        )}
      </Row>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhones: () => dispatch(fetchPhones()),
  };
};

export default compose(
  connect((state) => ({ phoneList: state.phone.phones }), mapDispatchToProps)
)(PhoneList);
