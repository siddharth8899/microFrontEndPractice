import React , { lazy, Suspense, useState, useEffect }  from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Header from './components/Header';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    isSignedIn && history.push('/dashboard');

    if (!isSignedIn && history.location.pathname === '/dashboard')
      history.push('/')

  }, [isSignedIn])
  

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignedIn={isSignedIn} onSignOut={()=> setIsSignedIn(false)} />
          <Suspense fallback={<div>Loading..</div>}>
            <Switch>
                <Route path='/auth'><AuthLazy onSignIn={()=>setIsSignedIn(true)}/></Route>
                <Route path='/dashboard'>
                  <DashboardLazy />
                </Route>
                <Route path='/' component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};