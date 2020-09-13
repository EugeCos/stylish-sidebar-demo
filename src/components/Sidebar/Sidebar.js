import React from 'react';
import * as s from './Sidebar.styles';

const Sidebar = props => {
  const { 
    backgroundImage = '', 
    sidebarHeader = '',
    menuItems = []
  } = props; 

  const menuItemsJSX = menuItems.map((item, index) => {
    return (
      <s.MenuItem key={index}>{item.name}</s.MenuItem>
    )
  })

  return (
    <s.SidebarContainer backgroundImage={backgroundImage}>
      <s.SidebarHeader>{sidebarHeader}</s.SidebarHeader>
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
    </s.SidebarContainer>
  )
}

export default Sidebar