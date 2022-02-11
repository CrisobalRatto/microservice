import React, {  } from 'react';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import Login from "./pages/login/Login";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import withAuth from './pages/login/withAuth';
import SignUpForm from "./pages/login/Signup";


function App() {

  

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        
       
       
        <Switch>
          
          <Route exact path="/" component={withAuth(Home)}>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <SignUpForm/>
          </Route>
          <Route path="/users" component={withAuth(UserList)} >
          </Route>
          <Route path="/user/:userId" component={withAuth(User)}>
          </Route>
          <Route path="/newUser" component={withAuth(NewUser)}>
          </Route>
          <Route path="/products" component={withAuth(ProductList)}>
          </Route>
          <Route path="/product/:productId" component={withAuth(Product)}>
          </Route>
          <Route path="/newProduct" component={withAuth(NewProduct)}>
          </Route>
          <Route path="/sales" component={withAuth(ProductList)}>
          </Route>
          <Route path="/newsale" component={withAuth(NewProduct)}>
          </Route>
          <Route path="/sales/:salesId" component={withAuth(Product)}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
