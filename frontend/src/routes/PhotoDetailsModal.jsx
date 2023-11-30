import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {

  const { photo, closeModal } = props;
  const { id, title, urls, user, location } = photo;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        <img src={urls.full} alt={title} className="photo-details-modal__image"/>
        <h2>{title}</h2>
        <p>Photographer: {user.username}</p>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
