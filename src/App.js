import React, {useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import {connect} from 'react-redux'
import {fetchCurrentWeatherStartAsync} from './redux/weather/weather.actions'
import Favourites from './components/Favourites';
import './App.scss';

function App({fetchCurrentWeatherStartAsync}) {

 useEffect(() => {
  fetchCurrentWeatherStartAsync()
   
 })
  return (
    <>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favourites} />
      </Switch>

    </>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCurrentWeatherStartAsync: () => dispatch(fetchCurrentWeatherStartAsync())
})

export default connect(null, mapDispatchToProps)(App);
