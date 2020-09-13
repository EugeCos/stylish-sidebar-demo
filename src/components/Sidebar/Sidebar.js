import React from 'react';
import * as s from './Sidebar.styles';

const Sidebar = props => {
  const { backgroundImage, sidebarHeader } = props;

  const menuItems = ['Home', 'About', 'Destinations', 'Blog', 'Services', 'Contacts'];

  return (
    <s.SidebarContainer backgroundImage={backgroundImage}>
      <s.SidebarHeader>{sidebarHeader}</s.SidebarHeader>
    </s.SidebarContainer>
  )
}

export default Sidebar