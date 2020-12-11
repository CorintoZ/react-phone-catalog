import { Nav, Navbar } from 'react-bootstrap';

function NavBar(props) {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='/'>Phone Catalog</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/phones/add'>Add phone</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavBar;
