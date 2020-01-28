import React from 'react';
import HomePage from './container/HomePage/HomePage'
import HowItWorks from './container/HowItWorks/HowItWorks'
import OurCities from './container/OurCities/OurCities'
import SignUp from './container/SignUp/SignUp'
import {Switch,Route} from 'react-router-dom'
import Layout from './component/Layout/Layout'


function App() {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route path="/how" component={() => <HowItWorks/>}/>
          <Route path="/cities" component={() => <OurCities/>}/>
          <Route path="/signup" component={() => <SignUp/>}/>
          <Route exact path="/" component={() => <HomePage/>}/>
        </Switch>
      </Layout>
      
    </React.Fragment>
  );
}

export default App;
