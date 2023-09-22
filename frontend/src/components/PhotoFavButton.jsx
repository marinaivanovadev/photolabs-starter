import React, { useCallback, useState, useEffect } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // State to track whether the photo is liked
  const [isLiked, setIsLiked] = useState(false);
  const updateFavorites = props.updateFavorites;
  const photoID = props.photoID;

  // Function to toggle the like status
  const handleLike = useCallback(() => {
    console.log(props);
    console.log(`Before toggle: isLiked=${isLiked}`);
    // setIsLiked((prevIsLiked) => !prevIsLiked);
    setIsLiked(!isLiked);
    // setIsLiked(props.toggleFavourite);
    updateFavorites(props.photo);
  
  });
  
  // Use useEffect to log the updated value of isLiked
  useEffect(() => {
    console.log({ isLiked });
  }, [isLiked]);

  return (
    <div className="photo-list__fav-icon" onClick={handleLike} >
      <div className="photo-list__fav-icon-svg">
        {/* Use the FavIcon component with onClick handler */}
        <FavIcon displayAlert={false} selected={isLiked} />

      </div>
    </div>
  );
}

export default PhotoFavButton;


