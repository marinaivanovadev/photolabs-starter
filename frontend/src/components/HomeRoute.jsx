import React, {useState} from 'react';

import TopNavigationBar from './TopNavigationBar'; // Import the TopNavigationBar component
import PhotoList from './PhotoList'; // Import the PhotosSection component
import '../styles/HomeRoute.scss';

const HomeRoute = () => {

  
  return (
    <div className="home-route">
      {/* Include the Top Navigation Bar */}
      <TopNavigationBar />

      {/* Include the Photos Section */}
      <PhotoList />
    </div>
  );
}

export default HomeRoute;



