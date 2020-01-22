import React from 'react';
import HomePage from './container/HomePage/HomePage'
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/how" component={HomePage}/>
        <Route path="/cities" component={HomePage}/>
        <Route path="/signup" component={HomePage}/>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
