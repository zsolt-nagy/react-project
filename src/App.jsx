import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
    <Router>
      <div className="App">
        <Nav />
        <Logo />
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/kapcsolat" component={Kapcsolat} /> 
          <Route path="/about" component={Rolam} /> 
          <Route path="/post"  component={Post} />
        </Switch>       
      </div>
    </Router>
  );
}

export default App;
