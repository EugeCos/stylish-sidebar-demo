import React from 'react';
import * as s from './Sidebar.styles';

const Sidebar = props => {
  const { backgroundImage } = props;

  return <s.SidebarContainer backgroundImage={backgroundImage}>Sidebar</s.SidebarContainer>
}

export default Sidebar