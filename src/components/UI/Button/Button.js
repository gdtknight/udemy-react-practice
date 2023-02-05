import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);

// 'false' === 'false'  -> `true` (String : primitive type)
// props.show === props.previous.show -> `false` (props.show : reference type)
// props.onClick === props.previous.onClick   ->  `false`
