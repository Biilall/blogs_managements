import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/blogs/')
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  const addBlog = (blog) => {
    axios.post('http://localhost:8000/api/blogs/', blog)
      .then(response => setBlogs([...blogs, response.data]))
      .catch(error => console.error('Error adding blog:', error));
  };

  const updateBlog = (id, updatedBlog) => {
    axios.put(`http://localhost:8000/api/blogs/${id}/`, updatedBlog)
      .then(response => {
        const updatedBlogs = blogs.map(blog =>
          blog.id === id ? response.data : blog
        );
        setBlogs(updatedBlogs);
      })
      .catch(error => console.error('Error updating blog:', error));
  };

  const deleteBlog = (id) => {
    axios.delete(`http://localhost:8000/api/blogs/${id}/`)
      .then(() => setBlogs(blogs.filter(blog => blog.id !== id)))
      .catch(error => console.error('Error deleting blog:', error));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
