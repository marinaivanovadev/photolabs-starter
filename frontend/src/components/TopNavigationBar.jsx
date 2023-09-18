import React, {useState} from 'react';
import TopicList from './TopicList'; 
import FavBadge from './FavBadge';
import FavIcon from './FavIcon';

import '../styles/TopNavigationBar.scss'

const TopNavigationBar = () => {
// State to track whether the heart icon is liked
const [isHeartLiked, setIsHeartLiked] = useState(false);

// Function to toggle the like status of the heart icon
const toggleHeartLike = () => {
  setIsHeartLiked(!isHeartLiked);
};


  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topics">
      <TopicList />
        
      </div>
      {/* <div className="top-nav-bar__fav-badge">
        {!isHeartLiked && <FavBadge displayAlert={toggleHeartLike}  />}
      </div> */}
      <div className="top-nav-bar__heart-icon" onClick={toggleHeartLike}>
        <FavIcon displayAlert={!toggleHeartLike} selected={!isHeartLiked} />
      </div>
       
        {/* Fav badge count */}
        <div className="fav-badge__count">
          {/* <span>5</span> */}
        
      </div>
    </div>
  );
}

export default TopNavigationBar;

