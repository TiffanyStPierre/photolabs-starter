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
  
  const openModal = (photo) => {
    setModalOpen(true);
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute photos={mockPhotos} topics={mockTopics} openModal={openModal}/>
      {isModalOpen && <PhotoDetailsModal closeModal={closeModal} photo={selectedPhoto} />}
    </div>
  );
};

export default App;
