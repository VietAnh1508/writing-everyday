import React, { ChangeEvent, FC, ReactElement, useState } from 'react';

import { Form } from 'react-bootstrap';

import './Editor.css';

const Editor: FC<{}> = (): ReactElement => {
  const [content, setContent] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const onUserInput = (event: ChangeEvent<HTMLInputElement>) => {
    const paragraph: string = event.target.value;
    setContent(paragraph);
    setWordCount(countWords(paragraph));
    autoGrow(event.target);
  };

  const countWords = (paragraph: string): number => {
    if (paragraph === '') {
      return 0;
    }
    return paragraph.trim().split(/\s+/).length;
  };

  const autoGrow = (element: HTMLInputElement): void => {
    element.style.height = '300px';
    element.style.height = element.scrollHeight + 'px';
  };

  return (
    <Form>
      <Form.Control
        as='textarea'
        value={content}
        cols={40}
        rows={20}
        onChange={onUserInput}
      />
      {wordCount} word{wordCount > 1 && 's'}
    </Form>
  );
};

export default Editor;
