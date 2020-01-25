import React from "react";
import "./App.css";
import AppNavBar from "./components/layouts/AppNavBar";
import Dashboard from "./components/layouts/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store, { rrfProps } from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import AddClient from "./components/clients/AddClient";
import ClientDetails from "./components/clients/ClientDetails";
import EditClient from "./components/clients/EditClient";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Settings from "./components/settings/Settings";
import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helpers/auth";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <div className='App'>
            <AppNavBar />
            <div className='container'>
              <Switch>
                <Route
                  exact
                  path='/'
                  component={UserIsAuthenticated(Dashboard)}
                />
                <Route
                  exact
                  path='/client/add'
                  component={UserIsAuthenticated(AddClient)}
                />
                <Route
                  exact
                  path='/client/:id'
                  component={UserIsAuthenticated(ClientDetails)}
                />
                <Route
                  exact
                  path='/client/edit/:id'
                  component={UserIsAuthenticated(EditClient)}
                />
                <Route
                  exact
                  path='/login'
                  component={UserIsNotAuthenticated(Login)}
                />
                <Route
                  exact
                  path='/settings'
                  component={UserIsAuthenticated(Settings)}
                />
                <Route
                  exact
                  path='/register'
                  component={UserIsNotAuthenticated(Register)}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
