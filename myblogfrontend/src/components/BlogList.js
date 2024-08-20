import React, { useContext } from 'react';
import BlogContext from '../context/BlogContext';
import '../styles/BlogList.css'; // Import the CSS file for styling

function BlogList() {
  const { blogs, deleteBlog } = useContext(BlogContext);

  return (
    <div className="blog-list-container">
      <h1 className="blog-list-header">Blog List</h1>
      <ul className="blog-list">
        {blogs.map(blog => (
          <li key={blog.id} className="blog-item">
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-body">{blog.content}</p>
            </div>
            <button className="blog-delete-button" onClick={() => deleteBlog(blog.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
