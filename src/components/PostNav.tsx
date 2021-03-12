import React, { FunctionComponent, ReactElement, useState } from 'react';

import { Row, Col, Pagination } from 'react-bootstrap';

const PostNav: FunctionComponent<{}> = (): ReactElement => {
  const today = new Date();

  const getCurrentMonth = (): number => today.getMonth() + 1;

  const getCurrentYear = (): number => today.getFullYear();

  const [selectedMonth, setSelectedMonth] = useState(() => getCurrentMonth());
  const [selectedYear, setSelectedYear] = useState(() => getCurrentYear());

  const getMonthName = (month: number): string => {
    return new Date(selectedYear, month, 0).toLocaleString('default', {
      month: 'long',
    });
  };

  const getDaysInMonth = (month: number, year: number): number[] => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const days: number[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const days: number[] = getDaysInMonth(selectedMonth, selectedYear);

  const goToPrevMonth = () => {
    if (selectedMonth === 1) {
      setSelectedMonth(12);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <h6>
              {getMonthName(selectedMonth)} {selectedYear}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <Pagination size='sm'>
              <Pagination.Prev onClick={goToPrevMonth} />
              {days.map((day: number) => (
                <Pagination.Item key={`${selectedMonth}-${day}`}>
                  {day}
                </Pagination.Item>
              ))}
              {(selectedMonth < today.getMonth() + 1 ||
                selectedYear < today.getFullYear()) && (
                <Pagination.Next onClick={goToNextMonth} />
              )}
            </Pagination>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PostNav;
