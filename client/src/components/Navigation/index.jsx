import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation(){
 return (
   <div>
     <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      {/* <Nav.Link href="home">Home</Nav.Link> */}
      <Nav.Link href="album">Photo Album</Nav.Link>
    </Nav>
  </Navbar>
   </div>
 )
}
export default Navigation;