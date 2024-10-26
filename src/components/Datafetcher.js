import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Datafetcher.css';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data); // Fetching all posts
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading data...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="data-container">
      <h1 className="main-title">Fetched Data</h1>
      <div className="data-grid">
        {data.map(post => (
          <div key={post.id} className="data-card">
            <h2 className="data-title">{post.title}</h2>
            <p className="data-body">{post.body}</p>
            <p className="data-user">User ID: {post.userId}</p>
            <p className="data-id">Post ID: {post.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetcher;
