import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img src={props.imageSource} alt="Photo" className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={props.profile} alt="Profile" className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <h3>{props.username}</h3>
          <h3 className="photo-list__user-location">{props.city}, {props.country}</h3>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
