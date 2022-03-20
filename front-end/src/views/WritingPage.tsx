import React, {
  FunctionComponent,
  ReactElement,
  useState,
  useEffect,
} from 'react';

import { Row, Col } from 'react-bootstrap';

import PostNav from '../components/PostNav';
import Editor from '../components/Editor';

import { getData } from '../store';

import Post from '../model/Post';

const WritingPage: FunctionComponent<{}> = (): ReactElement => {
  const today = new Date();

  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedDay, setSelectedDay] = useState(today.getDate());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());

  useEffect(() => {
    const data: Post[] = getData();
    setPosts(data);
  }, [selectedDay]);

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

  const getPostcontentBySelectedDay = (): string => {
    const day = new Date(selectedYear, selectedMonth, selectedDay);
    const post: Post | undefined = posts.find(
      (post: Post) => post.createdDate.getTime() === day.getTime()
    );
    if (post) {
      return post.content;
    }
    return '';
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
          <Editor content={getPostcontentBySelectedDay()} />
        </Col>
      </Row>
    </Col>
  );
};

export default WritingPage;
