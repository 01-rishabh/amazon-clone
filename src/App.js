import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from "./Checkout"
import Login from "./Login"
import Payment from "./Payment"
import Orders from "./Orders"
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe('pk_test_51IgYJhSCfqZd1ek8V4TR6zxQzr74CkvYYxVW8JrJOKPZpmiHOvnZKdLixKpTFlvuECVycDO1lBBJYy8DfL8P0FVf00McGUXshB');



function App() {

  const [{}, dispatch] = useStateValue();


  useEffect(() => {
    //will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);

      if(authUser) {

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
        
      }
    })
  }, [] ) 


  return (
    //BEM
    <Router>
      <div className="App">
      

      <Switch>
      <Route path="/orders">
      <Header />
            <Orders />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/checkout">
        <Header />
            <Checkout />
        </Route>
        <Route path="/payment">
        <Header />
        <Elements stripe={promise}>
        <Payment />
        </Elements>
        
            
        </Route>
        <Route path="/">
        <Header />
          <Home />
        </Route>
      </Switch>
        
     
      {/* <Product /> */}
    </div>
    </Router>
  );
}

export default App;
