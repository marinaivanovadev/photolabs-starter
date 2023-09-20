import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from 'assets/closeSymbol.svg';

const PhotoDetailsModal = ({ isOpen, onClose, photo, photos, similarPhoto }) => {
  useEffect(() => {
    // Log the photo details when the modal opens
    if (isOpen && photo) {
      console.log('Selected Photo Details:', photo);
    }
  }, [isOpen, photo]);

  return (
    <div className={`photo-details-modal ${isOpen ? 'open' : ''}`}>
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__header">
        {photo.urls && photo.urls.full && (
          <img
            className="photo-details-modal__images"
            src={photo.urls.full} // Display the full-sized image
            alt={photo.title}
          />
        )}
        <div className="photo-details-modal__photographer-details">
          {photo.user && photo.user.profile && (
            <img
              className="photo-list__user-profile"
              src={photo.user.profile}
              alt={`${photo.user.username}'s profile`}
            />
          )}
          <div className="photo-list__user-info-container">
            <h3 className="photo-list__user-info">{photo.user && photo.user.name}</h3>
            {photo.location && photo.location.city && (
              <h3 className="photo-list__user-location">
                {photo.location.city}, {photo.location.country}
              </h3>
            )}
          </div>
        </div>
      </div>

      {isOpen && (
  <div className="photo-details-modal__similar-photos">
    <h2>Similar Photos</h2>
    <div className="photo-details-modal__similar-photos-list">
      {photo.similar_photos &&
        photo.similar_photos.map((similarPhotoId) => {
          // Find the similar photo in the 'photos' array by ID
          const similarPhoto = photos.find((photo) => photo.id === similarPhotoId);

          return (
            similarPhoto && (
              <div key={similarPhoto.id} className="similar-photo">
                <img src={similarPhoto.urls.regular} alt={similarPhoto.title} />
              </div>
            )
          );
        })}
    </div>
  </div>
)}

    </div>
  );
};

export default PhotoDetailsModal;
