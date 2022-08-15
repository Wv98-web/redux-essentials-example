import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './app/Navbar';
import { Home } from './features/index';
import { EditPostForm } from './features/posts/EditPostForm';
import { SinglePostPage } from './features/posts/SinglePostPage';
import { UsersList } from './features/users/UsersList';
import { UserPage } from './features/users/UserPage';
import { NotificationsList } from './features/notifications/notificationsList';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/posts/:postId" element={<SinglePostPage />} />
          <Route exact path="/editPost/:postId" element={<EditPostForm />} />
          <Route exact path="/users" element={<UsersList />} />
          <Route exact path="/users/:userId" element={<UserPage />} />
          <Route exact path="/notifications" element={<NotificationsList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
