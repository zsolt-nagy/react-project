import React from "react";
import {HashRouter, Switch, Redirect, Route} from "react-router-dom";
import "./App.css"
import Nav from "./components/Nav/Nav";
import Logo from "./components/Logo/Logo";
import Home from "./containers/Home/Home";
import Kapcsolat from "./containers/Kapcsolat/Kapcsolat";
import Post from "./containers/Post/Post";
import Rolam from "./containers/Rolam/Rolam";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
      <div className="App">
        <HashRouter>
          <Nav />
          <Logo />
          <Switch>
            <Route exact path="/"  component={Home} />  
            <Route path="/kapcsolat" component={Kapcsolat} /> 
            <Route path="/rolam" component={Rolam} /> 
            <Route path="/post"  component={Post} />
            <Redirect to={"/"} />
          </Switch> 
        </HashRouter>      
      </div>
  );
}

export default App;
