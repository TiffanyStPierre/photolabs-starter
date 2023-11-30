import React, { useState } from 'react';

function useApplicationData() {

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favPhotos, setFavPhotos] = useState([]);

  const state = {
    isModalOpen,
    selectedPhoto,
    favPhotos
  };

  const isPhotoInFavorites = function(id) {
    //console.log("isPhotoInFavorites", id);
    return favPhotos.includes(id);
  };

  const updateToFavPhotoIds = function(id) {
    console.log("updateToFavPhotoIds", id);
    if (isPhotoInFavorites(id)) {
      return setFavPhotos(favPhotos.filter(i => i !== id));
    }

    setFavPhotos([...favPhotos, id]);

  };

  const onPhotoSelect = function(photo) {
    setModalOpen(true);
    setSelectedPhoto(photo);
  };

  const onClosePhotoDetailsModal = function() {
    setModalOpen(false);
  };

  return { state, updateToFavPhotoIds, onPhotoSelect, onClosePhotoDetailsModal, isPhotoInFavorites };
}

export default useApplicationData;