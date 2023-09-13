import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ props }) => {
  const { id, username, imageSource, location, profile } = props;

  const [liked, setLiked] = useState(false);
  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <div className="photo-list__item" key={id}>
      <PhotoFavButton onClick={toggleLiked} liked={liked} />
      <img
        // src={props.urls.full} alt="Full" 
        src={props.urls.regular} alt="Regular"
        // alt={`Photo by ${username}`}
        className="photo-list__image"
      />
      <div className="photo-list__user-details">
        <img
          src={props.user.profile}
          alt={`${username}'s profile`}
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info-container">
          <p className="photo-list__user-info">{props.user.name}</p>
          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;







