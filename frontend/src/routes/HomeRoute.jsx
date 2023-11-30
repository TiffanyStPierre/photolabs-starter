import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} favPhotos={props.favPhotos}/>
      <PhotoList photos={props.photos} markAsFavPhoto={props.markAsFavPhoto} openModal={props.openModal}/>
    </div>
  );
};

export default HomeRoute;
