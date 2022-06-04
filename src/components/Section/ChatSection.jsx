import React from 'react';
import styles from './ChatSection.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ChatSection = (props) => {
  const {
    values = {},
    message = '',
    onSubmit = () => console.log('onSubmit'),
    onChange = () => console.log('onChange'),
    className: rootClassName,
  } = props;

  const className = cx(styles.root, rootClassName);

  return (
    <div className={className}>
      <h1 className={styles.title}>채팅</h1>
      <div className={styles.list}>
        {values.messages &&
          values.messages.map((element) => (
            <div
              className={cx(
                styles.message,
                values.senderId === element.userId
                  ? styles.sender
                  : styles.receiver
              )}
              key={element.messageTime}
            >
              {values.senderId !== element.userId && (
                <img
                  className={styles.image}
                  alt=""
                  src={
                    element.profileImage ||
                    'https://973s3.s3.ap-northeast-2.amazonaws.com/3c861103-5d9d-4d1a-af4b-7565571cbac0.png'
                  }
                />
              )}
              <span className={styles.content}>
                <span className={styles.nickname}>{element.nickname}</span>
                {element.content}
              </span>
              <span className={styles.date}>
                {element.messageTime.split('T')[1]}
              </span>
            </div>
          ))}
      </div>
      <form className={styles.input_wrapper} onSubmit={onSubmit}>
        <input
          value={message}
          type="text"
          name="message"
          placeholder="메세지를 입력하세요."
          onChange={onChange}
        />
        <button type="submit">보내기</button>
      </form>
    </div>
  );
};

export default ChatSection;
