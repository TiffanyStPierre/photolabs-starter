import React from 'react';

import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = (props) => {


  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={props.resetDisplayedPhotos}>PhotoLabs</span>
      <TopicList
        topics={props.topics}
        topicSelect={props.topicSelect}
      />
      <FavBadge
        favorites={props.favorites}
        selected={props.favorites}
        displayFavPhotos={props.displayFavPhotos}
        favPhotos={props.favPhotos}
      />
    </div>
  );
};

export default TopNavigation;