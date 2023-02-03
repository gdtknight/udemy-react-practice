import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// component 함수 내부의 어떤 것도 필요하지 않음.
// 따라서 component function 외부에 선언
// useState -> [state, setStateFn]
// useReducer -> [state, actionFnApplyToState]
const emailReducer = (state, action) => {
  if (action.type == 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') }
  }

  if (action.type == 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') }
  }

  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type == 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }

  if (action.type == 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }

  return { value: '', isValid: false };
};

const Login = (props) => {

  const [formIsValid, setFormIsValid] = useState(false);

  // emailReducer 가 dispatchEmail Function을 사용(consume).
  const [emailState, dispatchEmail] = useReducer(
    emailReducer, { value: '', isValid: false }
  );

  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer, { value: '', isValid: false }
  );

  // js - destructuring, alias assignment
  // prop 이 변경될 때마다 이펙트가 재실행 되는 것을 방지하고 싶을 때에도
  // 아래와 같은 트릭을 사용한다.
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(
    () => {
      console.log('Checking form validity!');
      const identifier = setTimeout(() => {
        setFormIsValid(emailIsValid && passwordIsValid);
      }, 500);

      return () => {
        console.log('CLEANUP');
        clearTimeout(identifier);
      }
    },
    [emailIsValid, passwordIsValid]
  );

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`} >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`} >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
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
