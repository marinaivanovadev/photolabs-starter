import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoListItem.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { urls, user, location } = props.photo;
  const similarPhotos = props.similarPhotos;

  // Transform the values of the similar_photos object into an array
  const similarPhotosArray = Object.values(similarPhotos);

  // Verify whether props.favorites is both defined and includes the id.
  const isFavorite = props.favorites && props.favorites.includes(props.photo.id);

  return (
    <div className="photo-details-modal">
      
      <button
        className="photo-details-modal__close-button"
        onClick={props.closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>

      <PhotoFavButton 
        photoId = {props.photo.id}
        isFavorite={isFavorite}
        updateFavorites = {props.updateFavorites} />

        
        <img className='photo-details-modal__image' src={urls.full} alt="full image"/>
        <div className='photo-details-modal__photographer-details'>
          <img className="photo-list__user-profile" src={user.profile}alt="heart"/>
        <div className="photo-list__user-info">
            {user.name}
        <div className="photo-list__user-location">
            {location.city}, {location.country}
        </div>
        </div>
        </div>
        
        <div className='photo-details-modal__header'>
          Similar photos
        </div>
     
        <div>
        
        <PhotoList
          favorites={props.favorites}
          updateFavorites={props.updateFavorites}
          showopenModal={props.openModal}
          photos={similarPhotosArray}
        /> 

        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
