import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './app/Navbar';
import { Home } from './features/index';
import { EditPostForm } from './features/posts/EditPostForm';
import { SinglePostPage } from './features/posts/SinglePostPage';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/posts/:postId" element={<SinglePostPage />} />
          <Route exact path="/editPost/:postId" element={<EditPostForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
