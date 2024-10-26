import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Our Data Fetcher App</h1>
      <p className="home-intro">
        Explore various public APIs and see how we can bring data to life!
        This application fetches posts, images, and more from popular APIs, providing a seamless experience for developers and data enthusiasts alike.
      </p>

      <h2 className="home-section-title">Features</h2>
      <ul className="home-features">
        <li>🔍 Fetch data from multiple public APIs</li>
        <li>🌍 Display real-time images and posts</li>
        <li>📊 View structured and readable data formats</li>
        <li>⚡ Fast and responsive user interface</li>
      </ul>

      <h2 className="home-section-title">Get Started</h2>
      <p>
        Click on the button below to explore the data:
      </p>
      <Link to="/datafetcher" className="btn explore-button">Explore Data</Link>

      <h2 className="home-section-title">API Highlights</h2>
      <p className="home-api-description">
        Our application integrates with several public APIs, including:
      </p>
      <ul className="home-api-list">
        <li>📝 <strong>JSONPlaceholder</strong>: A free fake online REST API for testing and prototyping.</li>
        <li>🌦️ <strong>OpenWeather</strong>: Get real-time weather data for any location worldwide.</li>
        <li>📸 <strong>Pexels</strong>: Access high-quality and completely free stock photos.</li>
      </ul>

      <h2 className="home-section-title">Why Choose Us?</h2>
      <p className="home-why-choose">
        Our goal is to provide a simple yet powerful platform for developers to fetch and visualize data quickly. We prioritize user experience and data readability.
      </p>
    </div>
  );
};

export default Home;
