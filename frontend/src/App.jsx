import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import './App.scss';
import mockPhotos from './mocks/photos';
import mockTopics from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favPhotos, setFavPhotos] = useState([]);

  const markAsFavPhoto = function(photo) {
    setFavPhotos((prev) => {
      // Check if the photo is already in favPhotos
      const isPhotoInFavorites = prev.some((favPhoto) => favPhoto.id === photo.id);
  
      // If the photo is in favorites, remove it; otherwise, add it
      if (isPhotoInFavorites) {
        return prev.filter((favPhoto) => favPhoto.id !== photo.id);
      } else {
        return [...prev, photo];
      }
    });
  };
  
  const openModal = (photo) => {
    setModalOpen(true);
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute photos={mockPhotos} topics={mockTopics} openModal={openModal} favPhotos={favPhotos} markAsFavPhoto={markAsFavPhoto}/>
      {isModalOpen && <PhotoDetailsModal closeModal={closeModal} photo={selectedPhoto} photos={mockPhotos} favPhotos={favPhotos} markAsFavPhoto={markAsFavPhoto}/>}
    </div>
  );
};

export default App;
