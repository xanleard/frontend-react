import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import { ContainerMain } from './Components/Container';
import { Login } from './Containers/login';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/containers" component={ContainerMain} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>

    </div>
  );

}

export default App;


