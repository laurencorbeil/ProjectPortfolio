import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/sova.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div 
      className="headerContainer" 
      style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <h1>Test Title</h1>
        <p>Test Line</p>
        <Link to="/menu">
          <button>Test Button</button>
        </Link>
        </div>
      </div>
  )
}

export default Home
