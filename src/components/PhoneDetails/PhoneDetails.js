import Media from 'react-bootstrap/Media';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { deletePhone } from '../../store/actions/phoneActions';

function PhoneDetails(props) {
  const history = useHistory();
  const idPhone = useParams().id;
  const [phone, setPhone] = useState('');
  useEffect(() => {
    setPhone(
      props.phoneList.filter((phone) =>
        phone.id === idPhone ? phone : null
      )[0]
    );
  }, [props.phoneList, idPhone]);
  const {
    name,
    price,
    phoneImage,
    id,
    manufacturer,
    description,
    screen,
    processor,
    color,
    ram,
  } = phone;
  const handleDelete = async (e) => {
    props.deletePhone(idPhone);
    history.push('/');
  };
  return (
    <Media className='align-self-start mt-4'>
      <img
        width={200}
        height={200}
        className='mr-3'
        src={phoneImage}
        alt='Phone'
      ></img>
      <Media.Body>
        <Card className='mr-3'>
          <h2>{`${name} - ${manufacturer}`}</h2>
          <span>{description}</span>
          <h5>Technical specs:</h5>
          <p>Screen: {screen}</p>
          <p>Processor: {processor}</p>
          <p>Ram: {ram}</p>
          <div>
            <span>Available colors:</span>
            <div className={`'circle-'${color}`}></div>
          </div>
          <div>
            <span>{price}</span>
          </div>
          <div className='m-4'>
            <Button className='mr-2' variant='danger' onClick={handleDelete}>
              Delete
            </Button>
            <Link to={`${id}/edit`}>
              <Button>Edit</Button>
            </Link>
          </div>
        </Card>
      </Media.Body>
    </Media>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePhone: (idPhone) => dispatch(deletePhone(idPhone)),
  };
};

export default compose(
  connect((state) => ({ phoneList: state.phone.phones }), mapDispatchToProps)
)(PhoneDetails);
