import React, {useState} from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import photos from 'mocks/photos';


const HomeRoute = (props) => {

  const favList = [];

  const [isFav, setIsFav] = useState(favList);

  const updateFavorites = (photo) => {
    if(isFav.includes(photo)) {
      setIsFav(isFav.filter((id) => id !== photo));
    }else {
      setIsFav([...isFav, photo]);
    }
  }
  const hasFavorites = () => {
    if (isFav.length > 0){
      return true;
    }

    return false;
  }
  
  return (
    <div className="home-route">
      {/* Include the Top Navigation Bar */}
      <TopNavigationBar hasFavorites = {hasFavorites}/>

      {/* Include the Photos Section */}
      <PhotoList  updateFavorites={updateFavorites} openModal = {props.openModal} isFav={isFav}/>
      <div>
     
    </div>
    </div>
  );
}

export default HomeRoute;
