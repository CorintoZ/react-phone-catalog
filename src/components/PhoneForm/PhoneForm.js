import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

function PhoneForm(props) {
  const phonesRef = props.phonesRef;
  const [state, setState] = useState({
    name: '',
    manufacturer: '',
    description: '',
    color: '',
    price: null,
    screen: '',
    processor: '',
    ram: '',
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const addPhone = async (e) => {
    e.preventDefault();
    await phonesRef.add({
      name: state.name,
      manufacturer: state.manufacturer,
      description: state.description,
      color: state.color,
      price: state.price,
      screen: state.screen,
      processor: state.processor,
      ram: state.ram,
    });

    setState({
      name: '',
      manufacturer: '',
      description: '',
      color: '',
      price: null,
      screen: '',
      processor: '',
      ram: '',
    });
  };

  return (
    <Form onSubmit={addPhone}>
      <Form.Group controlId='formBasicName'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleChange}
          name='name'
          value={state.name}
          type='text'
          placeholder='Enter name'
          required
        />
      </Form.Group>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Manufacturer</Form.Label>
        <Form.Control
          onChange={handleChange}
          name='manufacturer'
          value={state.manufacturer}
          type='text'
          placeholder='Enter manufacturer'
          required
        />
      </Form.Group>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          onChange={handleChange}
          name='description'
          value={state.description}
          as='textarea'
          rows={3}
          required
        />
      </Form.Group>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Color</Form.Label>
        <Form.Control
          onChange={handleChange}
          name='color'
          value={state.color}
          type='text'
          placeholder='Enter color'
          required
        />
      </Form.Group>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Price</Form.Label>
        <Form.Control
          onChange={handleChange}
          name='price'
          value={state.price}
          type='number'
          placeholder='Enter price'
          required
        />
      </Form.Group>
      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Screen</Form.Label>
        <Form.Control
          onChange={handleChange}
          name='screen'
          value={state.screen}
          type='text'
          placeholder='Enter screen type'
          required
        />
      </Form.Group>
      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Processor</Form.Label>
        <Form.Control
          onChange={handleChange}
          name='processor'
          value={state.processor}
          type='text'
          placeholder='Enter processor'
          required
        />
      </Form.Group>
      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Ram capacity</Form.Label>
        <Form.Control
          onChange={handleChange}
          name='ram'
          value={state.ram}
          type='text'
          placeholder='Enter ram capacity'
          required
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default PhoneForm;
