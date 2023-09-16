import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { id, username, imageSource, location, profile, photo, addFavourite } = props;

  

  return (
    <li className="photo-list__item" key={id}>
      <PhotoFavButton
        photo={photo}
        addFavourite={props.toggleFavourite}
      />
      <img src={imageSource} alt="Regular" className="photo-list__image" />
      <div className="photo-list__user-details">
        <img
          src={profile}
          alt={`${username}'s profile`}
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info-container">
          <p className="photo-list__user-info">{username}</p>
          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </div>
      </div>
    </li>
  );
}

export default PhotoListItem;
