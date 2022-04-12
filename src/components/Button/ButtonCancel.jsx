import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import Button from './Button';

const cx = classNames.bind(styles);

const ButtonCancel = (props) => {
  const {
    value = '취소',
    type = 'button',
    onClick = () => console.log('onClick'),
    className: rootClassName,
  } = props;

  const className = cx(styles.root, rootClassName);

  return (
    <Button className={className} value={value} type={type} onClick={onClick} />
  );
};
export default ButtonCancel;
