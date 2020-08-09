import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import './App.css';
import Home from './conatiners/home/home';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact={false} path="/" component={Home} key="AppLogin" />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
