import React from "react";
import PhotoListItem from "./PhotoListItem";

import photos from "mocks/photos"
import "../styles/PhotoList.scss"; // Import the SCSS file

const PhotoList = (props) => {
  return (
    <ul className="photo-list"> 
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavourite={props.toggleFavourite}
          imageSource={photo.urls.regular}
          profile={photo.user.profile}
          username={photo.user.username}
          location={photo.location}
        />
      ))}
    </ul>
  );
}

export default PhotoList;

