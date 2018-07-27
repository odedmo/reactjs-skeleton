import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
