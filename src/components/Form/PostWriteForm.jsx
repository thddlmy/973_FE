import React from 'react';
import styles from './PostWriteForm.module.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

const PostWriteForm = (props) => {
  const {
    values = {},
    errors = {},
    onChange = () => console.log('onChange'),
    onSubmit = () => console.log('onChange'),
    className: rootClassName,
  } = props;

  const className = cx(styles.root, rootClassName);

  return (
    <form className={className} onSubmit={onSubmit}>
      <h1 className={styles.title}>게시글 쓰기</h1>
      <div className={styles.wrapper}>
        {/* 제목 */}
        <input
          className={styles.post__input}
          name="title"
          value={values.title}
          type="text"
          placeholder="제목을 입력하세요."
          onChange={onChange}
        />
        {/* 과목 */}
        <select
          className={styles.post__select}
          name="subject"
          onChange={onChange}
        >
          <option value="default">과목</option>
          <option value="health">헬스</option>
          <option value="soccer">축구</option>
        </select>
        {/* 위치 */}
        <select
          className={styles.post__select}
          name="location"
          onChange={onChange}
        >
          <option value="default">지역</option>
          <option value="seoul">서울</option>
        </select>
      </div>
      {/* 본문 */}
      <textarea
        className={styles.post__textarea}
        name="text"
        onChange={onChange}
      />
      <button className={styles.post_button_large} type="submit">
        작성
      </button>
    </form>
  );
};

export default withRouter(PostWriteForm);
