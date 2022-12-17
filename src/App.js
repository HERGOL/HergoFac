import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import Home from './Pages/index';
import DpSt from './Pages/Dps/DpSt';
import DpSh from './Pages/Dps/DpSh';
import DpBio from './Pages/Dps/DpBio';
import DpChimie from './Pages/Dps/DpChimie';
import DpGe from './Pages/Dps/DpGe';
import DpSm from './Pages/Dps/DpSm';
import DpMath from './Pages/Dps/DpMath';
import DpGeo from './Pages/Dps/DpGeo';
import DpGc from './Pages/Dps/DpGc';

import NotFound from './Pages/NotFound';

import ReactGA from "react-ga4";




function App() {
  ReactGA.initialize("G-BELMLWG2S4");
  ReactGA.send("pageview");
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/Dps/DpSt' component={DpSt} exact/>
        <Route path='/Dps/DpStSm' component={DpSm} exact/>
        <Route path='/Dps/DpBio' component={DpBio} exact/>
        <Route path='/Dps/DpChimie' component={DpChimie} exact/>
        <Route path='/Dps/DpGe' component={DpGe} exact/>
        <Route path='/Dps/DpGc' component={DpGc} exact/>
        <Route path='/Dps/DpMath' component={DpMath} exact/>
        <Route path='/Dps/DpSh' component={DpSh} exact/>
        <Route path='/Dps/DpGeo' component={DpGeo} exact/>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
export default App;
