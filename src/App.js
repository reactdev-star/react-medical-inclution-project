import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n';
//import Nav from "./components/nav";
import Login from "./components/login";
import Hompage from "./components/homepage";
import Inteview from "./components/inteview";
import Welcome from "./components/welcom";
import InternalMedcine from "./components/InternalMedcine";
import Dialect from "./components/diaLect/dialect";
import Wakayama from "./components/diaLect/wakayama";
import BasicSentences from "./components/diaLect/basicSentences";
import Obstetricgynecology from "./components/Obstetricgynecology";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { InternalMedContext } from './components/internalMedContext';
//import { BasicSentContext } from './components/diaLect/basicSentContext';
import {ObstetricgynecologyContext} from "./components/ObstetricgynecologyContext"

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/homepage" component={Hompage} />
      <Route path="/inteview" component={Inteview} />
      <Route path="/welcome" component={Welcome} />
      <InternalMedContext>
      <Route path="/internalMedcine" component={InternalMedcine} />
      </InternalMedContext>
      <ObstetricgynecologyContext>
      <Route path="/obstetricgynecology" component={Obstetricgynecology} />
      </ObstetricgynecologyContext>
      
      <Route path="/dialect" component={Dialect} />
      <Route path="/wakayama" component={Wakayama} />
      <Route path="/basicSentences" component={BasicSentences} />
      
    </div>
    </Router>
  );
}

export default App;
