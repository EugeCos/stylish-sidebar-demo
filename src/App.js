import React from 'react';
import * as s from './App.styles';

// Components
import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/MainView'


const App = () => {
  const backgroundImage = 'images/mountain.jpg';
  const sidebarHeader = 'Yo Yo Travel';

  return (
    <s.App>
      <Sidebar 
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
      />
      <MainView />
    </s.App>
  );
}

export default App;
