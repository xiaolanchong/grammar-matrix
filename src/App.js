import React from 'react'
//import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
import NavBar from './NavBar.js'
import MainPage from './MainPage.js'
//import ExprPage from './ExprPage.js'
//import TagPage from './TagPage.js'


function Error() {
   return (
            <div className='text-center'>
               <h1>404</h1>
               <h2>Нет такой страницы</h2>
            </div>
          );
}

function App() {
  return (
      <BrowserRouter>
      <NavBar />
      <Switch> 
        <Route path={`${process.env.PUBLIC_URL}/`} component={MainPage} exact/>
        <Route path={`${process.env.PUBLIC_URL}/?:langLevel`} component={MainPage}/>
        
      {/*
         <Route path={`${process.env.PUBLIC_URL}/`} component={MainPage} exact/>
         <Route path={`${process.env.PUBLIC_URL}/expr/:expr`} component={ExprPage}/>
         <Route path={`${process.env.PUBLIC_URL}/tag/:tagName`} component={TagPage}/>
         */
      }
         <Route component={Error}/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
