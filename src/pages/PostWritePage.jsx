import React from 'react';
import { PostWriteFormContainer } from '@containers/Form';
import { LayoutColumn } from '@components/Layout';

const PostWritePage = () => {
  return (
    <LayoutColumn>
      <PostWriteFormContainer />
    </LayoutColumn>
  );
};

export default PostWritePage;
