import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import './App.scss';
import mockPhotos from './mocks/photos';
import mockTopics from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, updateToFavPhotoIds, onPhotoSelect, onClosePhotoDetailsModal, isPhotoInFavorites } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={mockPhotos}
        topics={mockTopics}
        openModal={onPhotoSelect}
        markAsFavPhoto={updateToFavPhotoIds}
        isPhotoInFavorites={isPhotoInFavorites}
        favPhotos={state.favPhotos}
      />

      {state.isModalOpen && <PhotoDetailsModal
        closeModal={onClosePhotoDetailsModal}
        photo={state.selectedPhoto}
        photos={mockPhotos}
        markAsFavPhoto={updateToFavPhotoIds}
        isPhotoInFavorites={isPhotoInFavorites}
      />}

    </div>

  );
};

export default App;
