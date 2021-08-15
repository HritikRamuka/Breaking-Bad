import React from "react"
import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from "./Screens/Home";
import Details from "./Screens/Details"
import Notfound from "./Screens/Notfound"

import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

function App() {

  

  return (
    
<BrowserRouter>
    <Header/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path ="/details/:id" component={Details}/>
    <Route component={Notfound}/>
    
    </Switch>
    <Footer/>
    </BrowserRouter>
  
    
    
  
    
  );
}

export default App;












