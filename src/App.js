import React from 'react';
import HomePage from './container/HomePage/HomePage'
import HowItWorks from './container/HowItWorks/HowItWorks'
import OurCities from './container/OurCities/OurCities'
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/how" component={HowItWorks}/>
        <Route path="/cities" component={OurCities}/>
        <Route path="/signup" component={HomePage}/>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
