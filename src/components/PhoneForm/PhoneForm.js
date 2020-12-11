import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPhone, editPhone } from '../../store/actions/phoneActions';

function PhoneForm(props) {
  const idPhone = useParams().id;
  const history = useHistory();
  useEffect(() => {
    if (idPhone) {
      setState(
        props.phoneList.filter((phone) =>
          phone.id === idPhone ? phone : null
        )[0]
      );
    }
  }, [props.phoneList, idPhone]);
  const [state, setState] = useState({
    name: '',
    manufacturer: '',
    description: '',
    color: '',
    price: '',
    screen: '',
    processor: '',
    ram: '',
    phoneImage: '',
  });

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }
  function setImage(e) {
    setState({
      ...state,
      phoneImage: e.target.files[0],
    });
  }

  const addPhone = async (e) => {
    e.preventDefault();
    props.addPhone(state);
    setState({
      name: '',
      manufacturer: '',
      description: '',
      color: '',
      price: '',
      screen: '',
      processor: '',
      ram: '',
    });
    history.push('/');
  };
  const editPhone = async (e) => {
    e.preventDefault();
    props.editPhone(state);
    setState({
      name: '',
      manufacturer: '',
      description: '',
      color: '',
      price: '',
      screen: '',
      processor: '',
      ram: '',
    });
  };

  return (
    <Form className='mt-4' onSubmit={idPhone ? editPhone : addPhone}>
      <Form.Group as={Row} controlId='formBasicName'>
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            onChange={handleChange}
            name='name'
            value={state.name}
            type='text'
            placeholder='Enter name'
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId='formBasicEmail'>
        <Form.Label column sm={2}>
          Manufacturer
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            onChange={handleChange}
            name='manufacturer'
            value={state.manufacturer}
            type='text'
            placeholder='Enter manufacturer'
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId='formBasicEmail'>
        <Form.Label column sm={2}>
          Description
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            onChange={handleChange}
            name='description'
            value={state.description}
            as='textarea'
            rows={3}
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId='formBasicEmail'>
        <Form.Label column sm={2}>
          Color
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            onChange={handleChange}
            name='color'
            value={state.color}
            type='text'
            placeholder='Enter color'
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId='formBasicEmail'>
        <Form.Label column sm={2}>
          Price
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            onChange={handleChange}
            name='price'
            value={state.price}
            type='number'
            placeholder='Enter price'
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId='formBasicPassword'>
        <Form.Label column sm={2}>
          Screen
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            onChange={handleChange}
            name='screen'
            value={state.screen}
            type='text'
            placeholder='Enter screen type'
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId='formBasicPassword'>
        <Form.Label column sm={2}>
          Processor
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            onChange={handleChange}
            name='processor'
            value={state.processor}
            type='text'
            placeholder='Enter processor'
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId='formBasicPassword'>
        <Form.Label column sm={2}>
          Ram capacity
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            onChange={handleChange}
            name='ram'
            value={state.ram}
            type='text'
            placeholder='Enter ram capacity'
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId='formBasicPassword'>
        <Form.Label column sm={2}>
          Image
        </Form.Label>
        <Col sm={9}>
          <Form.File id='imageFormControlFile' onChange={setImage} />
        </Col>
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default connect((state) => ({ phoneList: state.phone.phones }), {
  addPhone,
  editPhone,
})(PhoneForm);
