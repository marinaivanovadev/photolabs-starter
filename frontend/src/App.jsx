import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData'; // Import the custom hook
import photos from 'mocks/photos';

import './App.scss';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

const hasFavorites = () => {
    return state.isFav.length > 0;
  };

  return (
    <div className="App">
      <HomeRoute
        openModal={setPhotoSelected}
        hasFavorites={hasFavorites}
        updateFavorites={updateToFavPhotoIds}
      />
      {state.isModalOpen && state.selectedPhoto && (
        <PhotoDetailsModal
          isOpen={state.isModalOpen}
          onClose={onClosePhotoDetailsModal}
          selectedPhoto={state.selectedPhoto}
          updateFavorites={updateToFavPhotoIds}
          photos={photos} 
        />
      )}
    </div>
  );
};

export default App;
