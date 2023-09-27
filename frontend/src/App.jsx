import React from "react";
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

import './App.scss';

const App = () => {

  const {
    state,
    updateFavorites,
    openModal,
    closeModal,
    fetchPhotosByTopic
  } = useApplicationData();

  // Extract the state values from the state object
    const { favorites, modal, topicData, photoData } = state;
    const selectedPhotoId = modal;
    const selectedPhoto = photoData.find((photo) => photo.id === selectedPhotoId);

  return (
    <div className="App">
       {/* Pass photoData from state to HomeRoute */}
      <HomeRoute
        openModal={openModal}
        favorites={favorites}
        updateFavorites={updateFavorites}
        photos={state.photoData}
        topics={state.topicData}
        isFavPhotoExist={favorites.length > 0}
        fetchPhotosByTopic = {fetchPhotosByTopic}
      />
      
      {modal && selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          similarPhotos={selectedPhoto.similar_photos}
          closeModal={closeModal}
          favorites={favorites}
          updateFavorites={updateFavorites}
          // check if there are any favorite photos
          isFavPhotoExist={favorites.length > 0}
        />
      )}
    </div>
  );
};

export default App;