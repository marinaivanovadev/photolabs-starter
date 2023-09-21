import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ hasFavorites }) => {
  const favoritesExist = hasFavorites();

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={favoritesExist} selected={favoritesExist} />
    </div>
  );
};

export default FavBadge;
