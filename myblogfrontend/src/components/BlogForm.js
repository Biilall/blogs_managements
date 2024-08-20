import React, { useState, useContext } from 'react';
import BlogContext from '../context/BlogContext';
import '../styles/BlogForm.css'; // Import CSS file for styling

function BlogForm({ blog }) {
  const { addBlog, updateBlog } = useContext(BlogContext);
  const [title, setTitle] = useState(blog ? blog.title : '');
  const [content, setContent] = useState(blog ? blog.content : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = { title, content };
    if (blog) {
      updateBlog(blog.id, blogData);
    } else {
      addBlog(blogData);
    }
  };

  return (
    <div className="blog-form-container">
      <h2>{blog ? 'Edit Blog' : 'New Blog'}</h2>
      <form onSubmit={handleSubmit} className="blog-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter the title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="Write your blog content here..."
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          {blog ? 'Update Blog' : 'Add Blog'}
        </button>
      </form>
    </div>
  );
}

export default BlogForm;
