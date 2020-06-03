import React,{useEffect} from 'react';
import {Switch ,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux'; 
import {createStructuredSelector} from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Checkout from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './component/header/header.component';


import {checkUserSession} from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selectors';

const App = ({checkUserSession,currentUser}) => {
  useEffect(()=> {
    checkUserSession();
  },[checkUserSession])

  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={Checkout} />
        <Route 
          exact 
          path='/signin' 
          render ={()=>currentUser ?(<Redirect to='/' />):(<SignInAndSignUpPage />)} 
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
