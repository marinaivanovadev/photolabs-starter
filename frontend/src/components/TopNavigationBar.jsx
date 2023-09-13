import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topics">
        
        <TopicList />
      </div>
      <div className="top-nav-bar__heart-icon">
        <FavBadge />
      </div>
    </div>
  )
}

export default TopNavigation;