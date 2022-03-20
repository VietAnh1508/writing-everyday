import React, { FunctionComponent, ReactElement } from 'react';

import { Row, Col, Pagination } from 'react-bootstrap';

interface Props {
  selectedDay: number;
  selectedMonth: number;
  selectedYear: number;
  onChangeSelectedDay: (e: React.MouseEvent<HTMLElement>) => void;
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
}

const PostNav: FunctionComponent<Props> = ({
  selectedDay,
  selectedMonth,
  selectedYear,
  onChangeSelectedDay,
  goToPrevMonth,
  goToNextMonth,
}): ReactElement => {
  const today = new Date();

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

  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <h6>
              {getMonthName(selectedMonth + 1)} {selectedYear}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <Pagination size='sm'>
              <Pagination.Prev onClick={goToPrevMonth} />
              {days.map((day: number) => (
                <Pagination.Item
                  key={`${selectedMonth}-${day}`}
                  active={
                    selectedDay === day && today.getMonth() === selectedMonth
                  }
                  onClick={onChangeSelectedDay}
                >
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
