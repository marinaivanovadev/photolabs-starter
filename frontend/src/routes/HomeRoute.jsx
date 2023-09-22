import React, {useState} from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import photos from 'mocks/photos';


const HomeRoute = (props) => {

  
  
  return (
    <div className="home-route">
      {/* Include the Top Navigation Bar */}
      <TopNavigationBar hasFavorites = {props.hasFavorites}/>

      {/* Include the Photos Section */}
      <PhotoList 
      updateFavorites={props.updateFavorites}
      openModal = {props.openModal}
      isFav={props.isFav}/>
      <div>
     
    </div>
    </div>
  );
}

export default HomeRoute;
