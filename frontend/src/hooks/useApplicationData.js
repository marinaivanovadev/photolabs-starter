import { useReducer, useEffect } from 'react';


const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  isFav: [],
  photos: [],
  topics: [],
};

const ACTIONS = {
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  SET_SELECTED_PHOTO: 'SET_SELECTED_PHOTO',
  TOGGLE_FAV_PHOTO: 'TOGGLE_FAV_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPICS_DATA: 'SET_TOPICS_DATA',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        selectedPhoto: action.payload,
      };
    case ACTIONS.SET_SELECTED_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
      };
    case ACTIONS.TOGGLE_FAV_PHOTO:
      if (state.isFav.includes(action.payload)) {
        const copyOfFavourites = state.isFav.filter((favPhotoId) => favPhotoId !== action.payload);
        return { ...state, isFav: copyOfFavourites };
      } else {
        return { ...state, isFav: [...state.isFav, action.payload] };
      }
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload };
    case ACTIONS.SET_TOPICS_DATA:
      return { ...state, topics: action.payload };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photo) => {
    dispatch({ type: ACTIONS.TOGGLE_FAV_PHOTO, payload: photo });
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,

  };
}

export default useApplicationData;

