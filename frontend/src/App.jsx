import React, { useState } from "react";
import "./App.scss";

import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "./components/PhotoList";
import HomeRoute from "routes/HomeRoute";
import PhotoFavButton from "components/PhotoFavButton";

const App = () => {
  const [likedPhotos, setLikedPhotos] = useState([]);
  
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
  return (
    <div className="App">
      <TopNavigationBar />
      <PhotoList toggleFavourite={toggleFavourite}/>
      <HomeRoute />
      </div>
  );
};

export default App;
