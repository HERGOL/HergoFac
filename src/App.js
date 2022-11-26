import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import Home from './Pages/index';
import DpSt from './Pages/DpSt';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/St' component={DpSt} exact/>
      </Switch>
    </Router>
  );
}
export default App;
