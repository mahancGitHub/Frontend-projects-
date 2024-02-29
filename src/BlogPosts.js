import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import Comment from './Comment';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=50');
        const data = await response.json();
        setPosts(data.map(post => ({ ...post, comments: [] }))); 
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  const fetchComments = async (postId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching comments:', error);
      return [];
    }
  };

  const handlePostClick = async (postId) => {
    const updatedPosts = [...posts];
    const postIndex = updatedPosts.findIndex(post => post.id === postId);

    if (postIndex !== -1) {
      const post = updatedPosts[postIndex];
      const comments = await fetchComments(postId);
      updatedPosts[postIndex] = { ...post, comments };
      setPosts(updatedPosts);
    }
  };

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <BlogPost post={post} onPostClick={() => handlePostClick(post.id)} />
          {post.comments.map(comment => (
            <Comment key={comment.id} commentText={comment.body} userEmail={comment.email} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
