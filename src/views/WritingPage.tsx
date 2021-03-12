import React, { FunctionComponent, ReactElement } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header';
import PostNav from '../components/PostNav';
import Editor from '../components/Editor';

const WritingPage: FunctionComponent<{}> = (): ReactElement => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <PostNav />
        </Col>
      </Row>
      <Row>
        <Col>
          <Editor />
        </Col>
      </Row>
    </Container>
  );
};

export default WritingPage;
