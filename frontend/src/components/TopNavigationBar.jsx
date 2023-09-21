import React, {useState} from 'react';
import TopicList from './TopicList'; 
import FavBadge from './FavBadge';
import FavIcon from './FavIcon';

import '../styles/TopNavigationBar.scss'

const TopNavigationBar = ({
 topics,
 getPhotosByTopic,
 hasFavorites,
 getAllPhotos,

}) => {
  return (
    <div className="top-nav-bar">
      <span onClick={getAllPhotos} className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} />
      <div>
      
      <FavBadge hasFavorites={hasFavorites}/>
      </div>
      </div>
        )
}

export default TopNavigationBar;

