import React from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Input = (props) => {
  const {
    type = 'text',
    value = '',
    name = 'input',
    onChange = () => console.log('onChange'),
    disabled = false,
    placeholder,
    className: rootClassName,
  } = props;

  const className = cx(styles.root, rootClassName);

  return (
    <input
      className={className}
      type={type}
      value={value}
      name={name}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
