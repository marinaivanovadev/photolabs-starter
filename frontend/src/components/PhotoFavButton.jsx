import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [liked, setLiked] = useState(false);


  const toggleLiked = () => {
    setLiked(!liked);
    console.log('Favorite icon clicked!');

  };


  return (
    <div
      className={`photo-list__fav-icon ${liked ? 'liked' : ''}`}
      onClick={toggleLiked}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={liked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;