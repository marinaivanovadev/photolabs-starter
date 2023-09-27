import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  // if props.favorites is both defined and includes the id
  const isFavorite = props.favorites && props.favorites.includes(props.id);

  return (
    <li className="photo-list__item">
      
        <PhotoFavButton 
        photoId = {props.id}
        isFavorite={isFavorite}
        updateFavorites = {props.updateFavorites} />
        <div className="photo-list__image-container">
      <img className="photo-list__image" src={props.urls.regular} onClick={() => props.openModal(props.id)}/>
    
      <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={props.user.profile} />
      <div className="photo-list__user-info"> {props.user.name}
      <div className="photo-list__user-location">{props.location.city}, {props.location.country}
        </div>
        </div>
        </div>
        </div>
    </li>
    
  );
};

export default PhotoListItem;