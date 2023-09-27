import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, isFavorite, updateFavorites }) {
 // Function to toggle the like status
  const handleLike = () => {
    updateFavorites(photoId);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleLike}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={isFavorite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;