import React from 'react';
import { Fragment } from 'react';

import { AddPostForm } from './posts/AddPostForm';
import { PostsList } from './posts/PostsList';
import { UsersList } from './users/UsersList';

export const Home = () => {
  return (
    <Fragment>
      <AddPostForm />
      <UsersList />
      <PostsList />
    </Fragment>
  );
};
