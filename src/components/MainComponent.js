import React from 'react';
import { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  
  constructor(props) {
    super(props);

    this.state ={
        dishes: DISHES
    };
  }
  
  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home">
        </Switch>
       <Footer />
      </div>
    );
  }
}

export default Main;
