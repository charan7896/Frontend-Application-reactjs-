import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About This Application</h1>
      <p className="about-description">
        This application is built using React and integrates data from various public APIs. 
        It showcases data fetching, routing, and state management. Each section provides 
        up-to-date information retrieved in real-time from external sources.
      </p>
      <section className="about-details">
        <h2>Technologies Used:</h2>
        <ul>
          <li >React</li>
          <li>Axios for HTTP Requests</li>
          <li>React Router for Navigation</li>
          <li>Public APIs (JSONPlaceholder, OpenWeather, Pexels)</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
