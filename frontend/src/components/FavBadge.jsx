import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {

  const displayAlert = isFavPhotoExist.length > 0;

  console.log('isFavPhotoExist:', isFavPhotoExist);
  console.log('displayAlert:', displayAlert);

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={displayAlert}/>
    </div>
  ) 
};

export default FavBadge;