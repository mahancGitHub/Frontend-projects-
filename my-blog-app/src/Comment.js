// Comment.js
import React from 'react';

const Comment = ({ commentText, userEmail }) => {
  return (
    <div className="comment">
      <p className="comment-email">{userEmail}</p>
      <p className="comment-body">{commentText}</p>
    </div>
  );
};

export default Comment;
