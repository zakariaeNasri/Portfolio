import React from 'react';
import {
  
  Route,
  Redirect,
  Switch,
  useLocation
} from 'react-router-dom';
import {AnimatePresence, motion} from'framer-motion';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import Navbar from './Components/Navbar/Navbar';
import './App.css'

function App () {
 const location=useLocation();
  return (
   <>
    <Navbar/>
    <main style={{overflowY:"hidden"}}>
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/service" exact>
          <Services/>
        </Route>
        <Route path="/Projects" exact>
          <Projects/>
        </Route>
        <Route path="/Contact" exact>
          <Contact/>
        </Route>
        <Redirect to="/" />
      </Switch>
      </AnimatePresence>
    </main>
    </>
   
  );
}

export default App;
