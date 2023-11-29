import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [favorite, setFavorite] = useState(false);

  const favClick = function() {
    setFavorite((prevFavorite) => !prevFavorite);
  };

  return (
    <div className="photo-list__fav-icon" onClick={favClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favorite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;