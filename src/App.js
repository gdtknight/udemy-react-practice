import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {
  console.log("APP RUNNING");

  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  // useCallback으로 함수를 감싸면
  // App function이 재실행될 때마다 새로운 함수가 생성되는 것을 막을 수 있다.
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(prevAllowToggle => !prevAllowToggle);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={allowToggleHandler}>Allow Toggling!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
