import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {

  const [favPhotos, setFavPhotos] = useState([]);

  const markAsFavPhoto = function(photo) {
    setFavPhotos((prev) => [...prev, photo]);
  }

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} favPhotos={favPhotos}/>
      <PhotoList photos={props.photos} markAsFavPhoto={markAsFavPhoto}/>
    </div>
  );
};

export default HomeRoute;
