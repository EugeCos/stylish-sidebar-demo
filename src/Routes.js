import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './components/MainView/Home/Home';
import About from './components/MainView/About/About';
import Destinations from './components/MainView/Destinations/Destinations';
import Blog from './components/MainView/Blog/Blog';
import Services from './components/MainView/Services/Services';
import Contacts from './components/MainView/Contacts/Contacts';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/destinations' component={Destinations} />
      <Route path='/blog' component={Blog} />
      <Route path='/services' component={Services} />
      <Route path='/contacts' component={Contacts} />
    </Switch>
  )
}

export default Routes