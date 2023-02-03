import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


  useEffect(() => {
    // Debouncing : 사용자가 입력을 마친 시점에서 일정 시간이 흐른 뒤에 입력값으로 판단
    // Bouncing (Chattering) : 예를 들어, 마우스 클릭을 한 번 했는데 오작동 나서 두세번 클릭한 것으로 인식
    // Bouncing 현상을 해결하기 위해 적용되는 기술이 Debouncing.
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);

    // CleanUp Function 
    // 새로운 타이머 함수를 실행하기 전에 이전에 실행된 타이머 함수를 지우는 역할
    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };

    // useEffect는 enteredEmail, enteredPassword 값이 사용자 입력에 의해 변경될 때마다 계속 호출된다.
    // 이 때마다 setTimeout 함수가 호출되는데 만약 이전 입력에서 이미 호출된 setTimeout 함수가 있다면,
    // cleanup 함수가 실행되어 이전에 호출된 setTimeout 함수는 해제되고,
    // 현재 입력으로 인해 호출된 setTimeout 함수만 카운팅을 시작한다.
    // 이후 설정된 값 (500ms)이 지나면 setTimeout 함수의 첫번째 인자로 전달된 함수(Checking form validity 이하)가 실행된다.
    // useState에 연결된 함수는 setFormIsValid 이므로, 리렌더링은 카운팅이 끝났을 때 한 번만 수행된다.
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
