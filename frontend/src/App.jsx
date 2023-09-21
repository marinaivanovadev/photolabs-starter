import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';

import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';

import './App.scss';

const App = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null); // Replace with your actual selected photo data
   


  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

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
    <div className="App">
     <HomeRoute openModal={openModal} hasFavorites={hasFavorites} updateFavorites={updateFavorites}/>
     {isModalOpen && selectedPhoto && (
        <PhotoDetailsModal 
        isOpen={openModal}
        onClose={closeModal}
        selectedPhoto={selectedPhoto}
        updateFavorites={updateFavorites}
        photos={photos}/>
     )}
    </div>

      
   
  );
}

export default App;
