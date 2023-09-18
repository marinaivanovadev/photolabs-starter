import React, { useState } from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile } = props;

  // State to track whether the photo is liked
  const [isLiked, setIsLiked] = useState(false);

  // Function to toggle the like status
  const toggleLike = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  return (
    <div className={`photo-list__item ${isLiked ? 'liked' : ''}`} key={id}>
      <PhotoFavButton photoId={id} isLiked={isLiked} toggleLike={toggleLike} />
      <img className="photo-list__image" src={imageSource} alt={`Photo by ${username}`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={`${username}'s profile`} />
        <div className="photo-list__user-info-container">
          <h3 className="photo-list__user-info">{username}</h3>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
