import React, { useReducer, useEffect } from 'react';

//Action types
const ACTIONS = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SHOW_MODAL: 'SHOW_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAVORITE:
      // Toggle favorites for a photo
      const updatedFavorites = state.favorites.includes(action.payload)
          ? state.favorites.filter((id) => id !== action.payload)
          : [...state.favorites, action.payload];
      return { ...state, favorites: updatedFavorites };

    case ACTIONS.SHOW_MODAL:
      // Show a modal with the specified photo ID
      return { ...state, modal: action.payload };

    case ACTIONS.CLOSE_MODAL:
      // Close the modal
      return { ...state, modal: null };

    case ACTIONS.SET_PHOTO_DATA:
      // Set the photo data in the state
      return { ...state, photoData: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      // Set the topic data in the state
      return { ...state, topicData: action.payload };

    default:
      return state;
  }
};

const useApplicationData = () => {
  // initialState
  const [state, dispatch] = useReducer(reducer, {
    favorites: [],
    modal: null,
    photoData: [],
    topicData: [],
    topicId: null,
  });

  // Define actions
  const updateFavorites = (photoId) => {
     dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: photoId });
  };

  const openModal = (photoId) => {
    dispatch({ type: ACTIONS.SHOW_MODAL, payload: photoId });
  };

  const closeModal = () => {
     dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  useEffect(() => {
    // Fetch photo data 
    fetch("/api/photos")
        .then((response) => response.json())
        .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []); 

  useEffect(() => {
    // Fetch topic data
    fetch("/api/topics")
        .then((response) => response.json())
        .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []); 

  const fetchPhotosByTopic = (topicId) => {
    // Fetch photos some topic
    fetch(`/api/topics/photos/${topicId}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
        }, []);
  };

  return {
    state,
    updateFavorites,
    openModal,
    closeModal,
    fetchPhotosByTopic
  };
};

export default useApplicationData;


