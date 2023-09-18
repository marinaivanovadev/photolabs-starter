import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // State to track whether the photo is liked
  const [isLiked, setIsLiked] = useState(false);

  // Function to toggle the like status
  const toggleLike = useCallback(() => {
    console.log(props);
    setIsLiked((prevIsLiked) => !prevIsLiked);
  }, []);
  

  return (
    <div className="photo-list__fav-icon" onClick={toggleLike}>
      <div className="photo-list__fav-icon-svg">
        {/* Use the FavIcon component with onClick handler */}
        <FavIcon displayAlert={false} selected={isLiked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;


