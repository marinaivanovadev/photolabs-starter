import React from "react";
import TopicList from "./TopicList";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import FavIcon from "./FavIcon";

const TopNavigation = ({ hasFavorites = false }) => {
  console.log("Liked Photos:", hasFavorites);

  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      
      <div className="top-nav-bar__topics">
        <TopicList />
      </div>
      <div className="top-nav-bar__heart-icon">
      <FavBadge  />
      </div>
    </div>
  );
};

export default TopNavigation;

