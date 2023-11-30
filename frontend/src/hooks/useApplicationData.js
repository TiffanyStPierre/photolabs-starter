import { useReducer } from 'react';

// Define action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_MODAL_OPEN: 'SET_MODAL_OPEN',
  SET_SELECTED_PHOTO: 'SET_SELECTED_PHOTO',
};

// Define initial state
const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favPhotos: [],
};

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favPhotos: [...state.favPhotos, action.payload] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favPhotos: state.favPhotos.filter((id) => id !== action.payload) };
    case ACTIONS.SET_MODAL_OPEN:
      return { ...state, isModalOpen: action.payload };
    case ACTIONS.SET_SELECTED_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

function useApplicationData() {
  // Use useReducer with the reducer and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Action creators
  const updateToFavPhotoIds = (id) => {
    dispatch({ type: state.favPhotos.includes(id) ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED, payload: id });
  };

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SET_MODAL_OPEN, payload: true });
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.SET_MODAL_OPEN, payload: false });
  };

  const isPhotoInFavorites = (id) => state.favPhotos.includes(id);

  return { state, updateToFavPhotoIds, onPhotoSelect, onClosePhotoDetailsModal, isPhotoInFavorites };
}

export default useApplicationData;

