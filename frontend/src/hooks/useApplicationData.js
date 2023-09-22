import { useState } from 'react';

const useApplicationData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isFav, setIsFav] = useState([]);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  const updateToFavPhotoIds = (photo) => {
    if (isFav.includes(photo)) {
      setIsFav(isFav.filter((id) => id !== photo));
    } else {
      setIsFav([...isFav, photo]);
    }
  };

  const state = {
    isModalOpen,
    selectedPhoto,
    isFav,
  };

  const setPhotoSelected = openModal;
  const onClosePhotoDetailsModal = closeModal;

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
