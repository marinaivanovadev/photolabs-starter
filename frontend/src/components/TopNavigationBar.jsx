import React, {useState} from 'react';
import TopicList from './TopicList'; 
import FavBadge from './FavBadge';
import FavIcon from './FavIcon';

import '../styles/TopNavigationBar.scss'

const TopNavigationBar = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
           <TopicList />
      <FavBadge hasFavorites={props.hasFavorites}/>
      </div>
        )
}

export default TopNavigationBar;

