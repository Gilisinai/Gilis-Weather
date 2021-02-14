import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Favourites from './components/Favourites';
import './App.scss';

function App() {
  return (
    <>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favourites} />
      </Switch>

    </>
  );
}

export default App;
