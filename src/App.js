import React from 'react';
import Brochures from './components/Brochures';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Error from './components/Error';
import Brochure from './components/Brochure';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Brochures />
          <Footer />
        </Route>

        <Route path='/view/:alias'>
          <Brochure />
        </Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
