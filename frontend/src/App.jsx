import React from 'react';

import HomeRoute from './routes/HomeRoute';
import './App.scss';
import mockPhotos from './mocks/photos';
import mockTopics from './mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute photos={mockPhotos} topics={mockTopics}/>
    </div>
  );
};

export default App;
