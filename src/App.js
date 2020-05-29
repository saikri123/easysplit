import React from 'react';
import './App.css';
import Welcome from './components/welcomepage';
import Signup from './components/signup'
import Signin from './components/signin'
import Dashboard from './components/dashboard'
import Navcomponent from './components/navacompnent';
import Nav from './components/nav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'




function App() {
  return (
    <Router>
       <div className="App">
       <Navcomponent />
         <Switch>
           <Route exact path='/' component ={Welcome}></Route>
           <Route path='/signup' component ={Signup}></Route>
           <Route path='/signin' component ={Signin}></Route>
           <Route path='/dashboard' component ={Dashboard}></Route>
           <Route path='/nav' component ={Nav}></Route>
         </Switch>
        
      </div>
    </Router>
     
   

  );
}

export default App;
