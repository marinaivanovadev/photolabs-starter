import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

import "../styles/PhotoList.scss";


const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        // Render a PhotoListItem component for each item in the mock data
        <li key={photo.id}>
          <PhotoListItem
            id={photo.id}
            location={photo.location}
            imageSource={photo.urls.regular}
            username={photo.user.username}
            profile={photo.user.profile}
          />
        </li>
      ))}
    </ul>
  );
};
export default PhotoList;
