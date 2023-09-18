import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
import topics from 'mocks/topics';



const TopicList = () => {
  return (
    <ul className="top-nav-bar__topic-list">
      {/* Insert React */}
      {topics.map((topic) => (
            
        <TopicListItem
          key={topic.id}
          label={topic.title}
          slug={topic.slug} />
             
      ))}
    </ul>
  );
};

export default TopicList;
