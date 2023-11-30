import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {

  const { photo, closeModal, photos } = props;
  const { id, title, urls, user, location } = photo;

  // Filter out the main photo from the list of similar photos
  const similarPhotos = photos.filter((p) => p.id !== id);

  return (
    < div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={props.closeModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className="photo-details-modal__body">
        <PhotoFavButton markAsFavPhoto={props.markAsFavPhoto} />
        <img src={urls.full} alt={title} className="photo-details-modal__image" />
        <header className="photo-details-modal__header">
          <div className="photo-details-modal__photographer-details">
            <img src={user.profile} className="photo-details-modal__photographer-profile" />
            <div className="photo-details-modal__photographer-info">
              <p>{user.username}</p>
              <p className="photo-details-modal__photographer-location">{location.city}, {location.country}</p>
            </div>
          </div>
        </header>
        <h3>Similar Photos</h3>
        <div className="photo-details-modal__images">
          <PhotoList photos={similarPhotos} markAsFavPhoto={props.markAsFavPhoto} />
        </div>
      </div>
    </div >
  );
};

export default PhotoDetailsModal;
