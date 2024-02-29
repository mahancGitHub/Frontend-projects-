// BlogPost.js
import React from 'react';

const BlogPost = ({ post, onPostClick, comments }) => {
  return (
    <div className="blog-post" onClick={onPostClick}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {comments && (
        <div className="comments">
          {comments.map(comment => (
            <div key={comment.id} className="comment">
              <p className="comment-body">{comment.body}</p>
              <p className="comment-email">{comment.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPost;
