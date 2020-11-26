import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Homepage from './pages/Homepage.jsx';
import ShopPage from './pages/shop/ShopComponent'
import Header from './components/header/HeaderComponent'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
