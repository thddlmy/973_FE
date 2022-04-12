import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = (props) => {
  const {
    value = '',
    type = 'button',
    onClick = () => console.log('onClick'),
    className: rootClassName,
  } = props;

  const className = cx(styles.root, rootClassName);

  return (
    <button className={className} type={type} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
