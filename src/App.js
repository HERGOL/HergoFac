import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import Home from './Pages/index';
import DpSt from './Pages/DpSt';
import NotFound from './Pages/NotFound';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/St' component={DpSt} exact/>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
export default App;
