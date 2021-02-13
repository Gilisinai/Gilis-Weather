import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './components/ui/Theme'
import Home from './components/Home'
import Favourites from './components/Favourites';
import './App.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favourites} />
      </Switch>

    </ThemeProvider>
  );
}

export default App;
