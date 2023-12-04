import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  
  const handleFavClick = () => {
    props.displayFavPhotos(props.favPhotos);
  };

  return (
    <div className='fav-badge' onClick={handleFavClick}>
      <FavIcon displayAlert={props.favorites} selected={true}/>
    </div>
  ) 
};

export default FavBadge;