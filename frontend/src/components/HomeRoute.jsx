import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from './TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from './PhotoFavButton';


function HomeRoute() {
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [hasFavorites, setHasFavorites] = useState(false); 
  
  const toggleFavourite = (photo) => {
    if (likedPhotos.includes(photo)){
      setLikedPhotos(prevFavourites => {
        let newFavourites = prevFavourites.filter((favouritePhoto) => favouritePhoto != photo);
        console.log(newFavourites); //log new state
        return newFavourites;
      });
    } else {
      // If not liked, add it
      setLikedPhotos(prevFavourites => {
        let newFavourites = [...prevFavourites, photo];
        console.log(newFavourites); //log new state
        return newFavourites;
    });
  }
  
  }

   // Update hasFavorites based on the updated likedPhotos
    setHasFavorites(likedPhotos.length > 0);
  


  return (
    <div className="home-route">
      <TopNavigation hasFavorites={hasFavorites}/> 
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} />
      <PhotoFavButton
        photo={props.photo}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
 };

export default HomeRoute;



