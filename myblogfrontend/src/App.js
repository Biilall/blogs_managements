import React from 'react';
import { BlogProvider } from './context/BlogContext';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';

function App() {
  return (
    <BlogProvider>
      <div>
        <h1>My Blog</h1>
        <BlogList />
        <BlogForm />
      </div>
    </BlogProvider>
  );
}

export default App;
