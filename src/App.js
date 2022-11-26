import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import Home from './Pages/index';
import DpSt from './Pages/Dps/DpSt';
import NotFound from './Pages/NotFound';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/Dps/DpSt' component={DpSt} exact/>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
export default App;
