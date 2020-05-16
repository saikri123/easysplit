import React from 'react';
import './App.css';
import Welcome from './components/welcomepage';
import Signup from './components/signup'
import Signin from './components/signin'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import Navcomponent from './components/navacompnent';


function App() {
  return (
    <Router>
       <div className="App">
       <Navcomponent />
         <Switch>
           <Route path='/welcome' component ={Welcome}></Route>
           <Route path='/signup' component ={Signup}></Route>
           <Route path='/signin' component ={Signin}></Route>
         </Switch>
         <Welcome/>
      </div>
    </Router>
     
   

  );
}

export default App;
