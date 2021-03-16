import React, { FunctionComponent, ReactElement, useState } from 'react';

import { Row, Col } from 'react-bootstrap';

import PostNav from '../components/PostNav';
import Editor from '../components/Editor';

import { getData } from '../store';

import Post from '../model/Post';

const WritingPage: FunctionComponent<{}> = (): ReactElement => {
  const today = new Date();

  const [posts, setPosts] = useState([]);
  const [selectedDay, setSelectedDay] = useState(today.getDate());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());

  const handleChangeSelectedDay = (e: React.MouseEvent<HTMLElement>) => {
    const day: string = (e.target as HTMLElement).innerText;
    if (day) {
      setSelectedDay(parseInt(day));
    }
  };

  const handleGoToPrevMonth = () => {
    if (selectedMonth === 1) {
      setSelectedMonth(12);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const handleGoToNextMonth = () => {
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  return (
    <Col>
      <Row>
        <Col>
          <PostNav
            selectedDay={selectedDay}
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
            onChangeSelectedDay={handleChangeSelectedDay}
            goToPrevMonth={handleGoToPrevMonth}
            goToNextMonth={handleGoToNextMonth}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Editor />
        </Col>
      </Row>
    </Col>
  );
};

export default WritingPage;
