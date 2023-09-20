import React from "react";
import PhotoListItem from "./PhotoListItem";
// const FavouriteContext = React.createContext();
import photos from "mocks/photos";

import "../styles/PhotoList.scss";


const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) => (
        // Render a PhotoListItem component for each item in the mock data
      
          <PhotoListItem 
          key={photoData.id}
          photoID = {photoData.id}
          data={photoData}
          updateFavorites={props.updateFavorites}
          openModal={props.openModal}
          similar_photos={props.similar_photos}
          
          />
      
      ))}
    </ul>
  );
};
export default PhotoList;
