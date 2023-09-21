import React from "react";


import "../styles/TopicListItem.scss";



const TopicListItem = (props) => {

const {label, getPhotosByTopic, title } = props;
  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <span onClick={getPhotosByTopic} className="topic-list__item-span">{props.title}</span>
    
    </div>
  );
};

export default TopicListItem;