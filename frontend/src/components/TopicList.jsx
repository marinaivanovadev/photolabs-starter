import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";


const TopicList = (props) => {
  const handleItemClick = (topicId) => {

      // Invoke the onTopicClick callback when a topic is clicked

    if (props.onTopicClick) {
      props.onTopicClick(topicId);
    }

  };
  return (
    <ul className="top-nav-bar__topic-list">
      {props.topics.map((topic) => (
        <TopicListItem
        key={topic.id}
        topic = {topic}
        onTopicClick={() => handleItemClick(topic.id)} />
      ))}
    </ul>
  );
};

export default TopicList;