import React from 'react';
import * as s from './App.styles';

// Components
import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/MainView'


const App = () => {

  const backgroundImage = 'images/mountain.jpg';

  return (
    <s.App>
      <Sidebar 
        backgroundImage={backgroundImage}
      />
      <MainView />
    </s.App>
  );
}

export default App;
