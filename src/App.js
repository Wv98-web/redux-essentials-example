import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './features';
import PostsList from './features/posts/PostsList';
import { AddPostForm } from './features/posts/AddPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import EditPostForm from './features/posts/EditPostForm';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/postslist' element={<PostsList />} />
        <Route exact path='/addpostform' element={<AddPostForm />} />
        <Route exact path='/postpage/:id' element={<SinglePostPage />} />
        <Route exact path='/editpostform/:id' element={<EditPostForm />} />
      </Routes>
    </div>
  );
}

export default App;
