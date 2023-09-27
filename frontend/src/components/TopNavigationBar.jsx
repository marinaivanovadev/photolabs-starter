import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'


const TopNavigationBar = (props) => {
    const handleItemClick = (topicId) => {
        // Call the onTopicClick callback when a topic is clicked
        if (props.onTopicClick) {
            props.onTopicClick(topicId);
        }
    };
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics = {props.topics} onTopicClick={handleItemClick}/>
      <FavBadge isFavPhotoExist={props.isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigationBar;