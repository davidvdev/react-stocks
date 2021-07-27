import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header'
import Main from './pages/Main'
import About from './pages/About'
import Stock from './pages/Stock'
import Dashboard from './pages/Dashboard'

import stockData from './stock-data'
import './App.css';

function App() {

  const [stocks, setStocks] = useState(null)
  
  useEffect(() => {
    setStocks(stockData)
  },[])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route 
          path="/stocks/:symbol" 
          render={(routerProps) => {return <Stock {...routerProps} stocks={stocks}/>}}
        />
        <Route path="/stocks">
          <Dashboard stocks={stocks}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
