import React from 'react';
import './Styles/main.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Description from './components/Description';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import NavDetail from './components/NavDetail'
import LanguageContextProvider from './components/Languagecontext/LanguageContext';


function App() {



  return (
    <div className="app">
      <LanguageContextProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Navbar/>
          <Description />
          <Projects/>
          <Contact/>
        </Route>
        <Route path='/project/:id'>
          <NavDetail/>
          <ProjectDetail/>
        </Route>
      </Switch>
      <Footer/>
      </BrowserRouter>
      </LanguageContextProvider>
    </div>
  );
}

export default App;