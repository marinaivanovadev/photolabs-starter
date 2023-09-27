import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  return (
    <ul className="photo-list">
       
      {props.photos.map((photo) => (
        // Render a PhotoListItem component for each item in the mock data
        <PhotoListItem 
        key={photo.id} {...photo}
        favorites={props.favorites}
        updateFavorites={props.updateFavorites}
        openModal={props.openModal}/>
      ))}
    </ul>
  );
};

export default PhotoList;