import React, { FunctionComponent, ReactElement } from 'react';

import { Navbar, Nav } from 'react-bootstrap';

const Header: FunctionComponent<{}> = (): ReactElement => {
  return (
    <Navbar expand='md'>
      <Navbar.Brand href='/'>Writing Everyday</Navbar.Brand>
      <Navbar.Collapse>
        <Nav>
          <Nav.Link href='/today'>Today</Nav.Link>
          <Nav.Link href='/help'>Help</Nav.Link>
          <Nav.Link href='/setting'>Setting</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
