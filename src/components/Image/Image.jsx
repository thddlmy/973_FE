import React from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Image = (props) => {
  const { src = '', alt = '', className: rootClassName } = props;
  const className = cx(styles.root, rootClassName);
  return <img className={className} src={src} alt={alt} />;
};

export default Image;
