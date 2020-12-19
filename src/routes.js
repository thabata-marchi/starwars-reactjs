import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Welcome from '../src/screens/Welcome';
import WinSide from '../src/screens/WinSide';

function Routes(){
  return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/win-side" component={WinSide} />
        </Switch>        
      </BrowserRouter>
  );
};

export default Routes;