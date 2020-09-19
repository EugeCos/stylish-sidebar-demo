import React, { useState } from 'react';
import * as s from './Sidebar.styles';

const Sidebar = props => {
  const { 
    backgroundImage = '', 
    sidebarHeader = '',
    menuItems = [],
    fonts = {
      header: '',
      menu: ''
    }
  } = props;

  // State
  const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
  const [isSidebarOpen, setSidebarState] = useState(true);

  const handleMenuItemClick = name => {
    setSelectedMenuItem(name)
  }

  const menuItemsJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name;

    return (
      <s.MenuItem 
        key={index}
        font={fonts.menu}
        selected={isItemSelected}
        onClick={() => handleMenuItemClick(item.name)}
      >
        <s.Icon src={item.icon} />
        <s.Text>{item.name}</s.Text>
      </s.MenuItem>
    )
  });

  return (
    <s.SidebarContainer backgroundImage={backgroundImage} isSidebarOpen={isSidebarOpen}>
      <s.SidebarHeader font={fonts.header}>{sidebarHeader}</s.SidebarHeader>
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
      <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
        <s.Toggler />
      </s.TogglerContainer>
    </s.SidebarContainer>
  )
}

export default Sidebar