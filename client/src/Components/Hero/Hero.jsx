import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import hand_icon from '../../Assets/hand_icon.png';
import Hero_image from '../../Assets/hero_image.jpg';


const Hero = () => {
  const navigate = useNavigate();

  const handleLatestClick = () => {
    navigate("/latest-collection"); // ✅ Navigate to route
  };

  return (
    <div className="hero" style={{ backgroundImage: `url(${Hero_image})` }}>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="Hand Icon" />
        </div>
        <p>collections</p>
        <p>for everyone</p>

        <div className="hero-latest-btn">
          <button onClick={handleLatestClick}>Latest Collection</button>
        </div>
        
      </div>
          
 
    </div>
     
  );
};

export default Hero;
