import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './Header.jsx'
import Main from './Main.jsx'
// import SignUp from '../components/SignUp'
const App = () => {
  return (
    <BrowserRouter>
     

    <Header/>
    <Switch>
    <Route path = '/' component ={Main} exact={true}/>
</Switch>

    </BrowserRouter>
   
    
  )
};

export default App;