import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const PostAuthor = ({ userId }) => {
  const author = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  return (
    <>
      <span>
        by{' '}
        <Link to={`/users/${author.id}`}>
          {author ? author.name : 'Unknown author'}
        </Link>
      </span>
    </>
  );
};
