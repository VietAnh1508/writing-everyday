import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';

import Header from './components/Header';
import WritingPage from './views/WritingPage';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <WritingPage />
      </Row>
    </Container>
  );
}

export default App;
