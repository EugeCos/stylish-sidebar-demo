import React from 'react';
import * as s from './App.styles';

// Components
import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/MainView'


function App() {
  return (
    <s.App>
      <Sidebar />
      <MainView />
    </s.App>
  );
}

export default App;
