import React from 'react';
import { Switch,Route, Redirect } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects'
import PortNavbar from './components/PortNavbar'



const App = () =>{

  return(
    <>
    <PortNavbar/>
    <Switch>
      <Route exact path ='/' component={Home} />
      <Route exact path ='/contact' component={Contact} />
      <Route exact path ='/about' component={About} />
      <Route exact  path ='/projects' component={Projects} />
      <Redirect to="/"/>   
    </Switch>
    </>
  )
}

export default App;
