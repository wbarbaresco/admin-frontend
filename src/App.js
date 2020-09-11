/* Import statements */
import React, { Component } from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './Navbar'; 
import Home from './Home'; 
import About from './About'; 

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
 