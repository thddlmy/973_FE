import React, { useEffect, useState, useCallback } from 'react';
import { PostPlayerSection } from '@components/Section';
import { getPlayerPosts } from '@apis/post';

const initialState = [
  {
    title: '',
    location: [],
    sport: [],
    text: '',
    userId: '',
  },
];

const PostPlayerSectionContainer = () => {
  const [values, setValues] = useState(initialState);

  const init = useCallback(async () => await getPlayerPosts({}), []);

  useEffect(() => {
    const response = init();
    setValues(response);
  }, [init]);

  return <PostPlayerSection values={values} />;
};

export default PostPlayerSectionContainer;
