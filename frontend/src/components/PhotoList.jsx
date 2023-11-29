import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo) => (
        <PhotoListItem 
        imageSource={photo.urls.full}
        username={photo.user.username}
        city={photo.location.city}
        country={photo.location.country}
        profile={photo.user.profile}
        key={photo.id}
        markAsFavPhoto={props.markAsFavPhoto}
        photo={photo}
        openModal={props.openModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
