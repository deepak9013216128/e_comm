import React from 'react';
import {Switch ,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShowPage from './pages/shop/shop.component'
import Header from './component/header/header.component';


function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShowPage} />
      </Switch>
    </div>
  );
}

export default App;
