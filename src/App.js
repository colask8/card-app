import './App.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Dashboard from './pages/dashboard/Dashboard';

const theme = createMuiTheme();

export const DefaultComponent = () => {

  return (
    <div>
      Start Component
    </div>
  )
}

export const App = ({store, persistor, history}) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MuiThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <Suspense fallback={<div>loading...</div>}>
              <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route path='/cards' component={DefaultComponent}/>
                <Route path='/cards/add' component={DefaultComponent}/>
                <Route path='/cards/:id/edit' component={DefaultComponent}/>
              </Switch>
            </Suspense>
          </ConnectedRouter>
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  );
}
export default App;
