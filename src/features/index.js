import React from 'react';

import { AddPostForm } from './posts/AddPostForm';
import { PostsList } from './posts/PostsList';

export default function Home() {
  return (
    <>
      <AddPostForm />
      <PostsList />
    </>
  );
}
