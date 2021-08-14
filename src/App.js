import React from "react"
import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from "./Screens/Home";
import Details from "./Screens/Details"

import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

function App() {

  

  return (
    
<BrowserRouter>
    <Header/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path ="/details/:id" component={Details}/>
    
    </Switch>
    <Footer/>
    </BrowserRouter>
  
    
    
  
    
  );
}

export default App;












