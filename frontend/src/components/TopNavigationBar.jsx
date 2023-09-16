import React from "react";
import TopicList from "./TopicList";

import FavIcon from "./FavIcon"; // Import the FavIcon component

import "../styles/TopNavigationBar.scss";

const TopNavigation = ({ likedPhotos = [] }) => {
  console.log("Liked Photos:", likedPhotos);
  const likedCount = likedPhotos.length;
  const isFavPhotoExist = likedPhotos.length > 0;

  // Determine if an alert should be displayed based on the condition
  const displayAlert = isFavPhotoExist; 

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {isFavPhotoExist && <div className="fav-badge">{likedCount}</div>}
      <div className="top-nav-bar__topics">
        <TopicList />
      </div>
      <div className="top-nav-bar__heart-icon">
        {/* Pass displayAlert and isFavPhotoExist as props to FavIcon */}
        <FavIcon displayAlert={displayAlert} selected={!!!isFavPhotoExist} />
      </div>
    </div>
  );
};

export default TopNavigation;

