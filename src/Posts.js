import React, { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');

  useEffect(() => {
    // Fetch posts from the backend
    fetch('http://localhost:5000/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Error fetching posts:', err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { content: newPostContent, user: 'User1' };

    fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost),
    })
      .then(res => res.json())
      .then(data => {
        setPosts(prevPosts => [...prevPosts, data]);
        setNewPostContent('');
      })
      .catch(err => console.error('Error posting new post:', err));
  };

  return (
    <div>
      <h2>HieroScribe Feed</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="Write a new post..."
          required
        />
        <button type="submit">Post</button>
      </form>
      {posts.length === 0 && <p>No posts yet.</p>}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.user}</strong>: {post.content}
            <br />
            <small>{new Date(post.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts; // Ensure this is a default export
