import React from 'react';
import { Fragment } from 'react';

import { AddPostForm } from './posts/AddPostForm';
import { PostsList } from './posts/PostsList';

export const Home = () => {
  return (
    <Fragment>
      <AddPostForm />
      <PostsList />
    </Fragment>
  );
};
