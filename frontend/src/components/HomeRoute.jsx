import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

function HomeRoute() {
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
    <div className="home-route">
      <TopNavigationBar />
      <PhotoList toggleFavourite={toggleFavourite} />
      <PhotoFavButton
        photo={props.photo}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
}

export default HomeRoute;



