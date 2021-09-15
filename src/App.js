import './Styles/main.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Description from './components/Description';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Description/>
          <Projects/>
          <Contact/>
        </Route>
        <Route path='/project/:id'>
          <ProjectDetail/>
        </Route>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;