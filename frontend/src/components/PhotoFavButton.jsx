import React, { useCallback, useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
 

  const [clicked, setClicked] = useState(false);
  const handleLikeClick = () => {
    console.log(props);
    setClicked(!clicked);
    props.addFavourite(props.photo);
    
  };

  return (
    <div className="photo-list__fav-icon"  onClick={handleLikeClick}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon displayAlert={false} selected={clicked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;


