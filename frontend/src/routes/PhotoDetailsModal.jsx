import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from 'assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ isOpen, onClose, selectedPhoto, updateFavorites }) => {

  
  useEffect(() => {
    // Log the photo details when the modal opens
    if (isOpen && selectedPhoto) {
      console.log('Selected Photo Details:', selectedPhoto);
    }
  }, [isOpen, selectedPhoto]);

  const renderSimilarPhotos = () => {
    if (!isOpen || !selectedPhoto || !selectedPhoto.similar_photos) {
      return null;
    }

    return (
      <div className="photo-details-modal__similar-photos">
        <h2>Similar Photos</h2>
        <div className="photo-details-modal__similar-photos-list">
          {selectedPhoto.similar_photos.map((similarPhoto) => {
            return (
              <div key={similarPhoto.id} className="similar-photo">
                <img src={similarPhoto.urls.regular} alt={similarPhoto.title} />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={`photo-details-modal ${isOpen ? 'open' : ''}`}>
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__header">
        {selectedPhoto.urls?.full && (
          <img
            className="photo-details-modal__images"
            src={selectedPhoto.urls.full}
            alt={selectedPhoto.title}
          />
        )}
        <div className="photo-details-modal__photographer-details">
          {selectedPhoto.user?.profile && (
            <img
              className="photo-list__user-profile"
              src={selectedPhoto.user.profile}
              alt={`${selectedPhoto.user.username}'s profile`}
            />
          )}
          <div className="photo-list__user-info-container">
            <h3 className="photo-list__user-info">{selectedPhoto.user?.name}</h3>
            {selectedPhoto.location?.city && (
              <h3 className="photo-list__user-location">
                {selectedPhoto.location.city}, {selectedPhoto.location.country}
              </h3>
            )}
          </div>
        </div>
      </div>

      {renderSimilarPhotos()}

      {/* You can pass the similarPhotos directly */}
      <PhotoList
        photos={selectedPhoto.similar_photos || []}
        updateFavorites={updateFavorites} // Ensure this is passed correctly
        isOpen={isOpen} // Ensure this is passed correctly
      />
    </div>
  );
};

export default PhotoDetailsModal;