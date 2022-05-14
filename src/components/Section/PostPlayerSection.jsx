import React from 'react';
import styles from './PostPlayerSection.module.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const initialState = [
  { title: '1', author: '1', text: '1' },
  { title: '2', author: '2', text: '2' },
  { title: '3', author: '3', text: '3' },
  { title: '4', author: '4', text: '4' },
  { title: '5', author: '5', text: '5' },
  { title: '6', author: '6', text: '6' },
  { title: '7', author: '7', text: '7' },
];

const PostPlayerSection = (props) => {
  const { values = {}, className: rootClassName } = props;
  const className = cx(styles.root, rootClassName);

  return (
    <div className={className}>
      <h1 className={styles.title}>플레이어</h1>
      <div className={styles.cards__wrapper}>
        {initialState.length &&
          initialState.map((element) => (
            <div className={styles.card__wrapper} key={element.title}>
              {element.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default withRouter(PostPlayerSection);
