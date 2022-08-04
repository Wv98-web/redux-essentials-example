import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Demo from './features/demo';
import PostsList from './features/posts/PostsList';
import { AddPostForm } from './features/posts/AddPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import EditPostForm from './features/posts/EditPostForm';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Demo />} />
        <Route exact path='/posts' element={<PostsList />} />
        <Route exact path='/addpostform' element={<AddPostForm />} />
        <Route exact path='/posts/:id' element={<SinglePostPage />} />
        <Route exact path='/editPost/:id' element={<EditPostForm />} />
      </Routes>
    </div>
  );
}

export default App;
