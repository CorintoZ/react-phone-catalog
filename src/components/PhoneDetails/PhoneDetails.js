import Media from 'react-bootstrap/Media';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function PhoneDetails(props) {
  const {
    name,
    price,
    imageUrl,
    id,
    manufacturer,
    description,
    screen,
    processor,
    color,
    ram,
  } = props.phoneDetails;
  return (
    <Media className='align-self-start'>
      <img
        width={200}
        height={200}
        className='mr-3'
        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wccftech.com%2Fwp-content%2Fuploads%2F2016%2F09%2FiPhone-7-9.jpg'
        alt='Phone'
      ></img>
      <Media.Body>
        <Card className='mr-3'>
          <h4>{`${name} - ${manufacturer}`}</h4>
          <span>{description}</span>
          <h5>Technical specs:</h5>
          <ul>
            <li>Screen: {screen}</li>
            <li>Processor: {processor}</li>
            <li>Ram: {ram}</li>
          </ul>
          <div>
            <span>Available colors:</span>
            <div className={`'circle-'${color}`}></div>
          </div>
          <div>
            <span>{price}</span>
          </div>
          <div>
            <Button onClick=''>Delete</Button>
            <Link>
              <Button>Edit</Button>
            </Link>
          </div>
        </Card>
      </Media.Body>
    </Media>
  );
}

export default PhoneDetails;
