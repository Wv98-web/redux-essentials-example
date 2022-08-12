import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './app/Navbar';
import Home from './features';
import { SinglePostPage } from './features/posts/SinglePostPage';
import EditPostForm from './features/posts/EditPostForm';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/posts/:id" element={<SinglePostPage />} />
          <Route exact path="/editPost/:id" element={<EditPostForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
