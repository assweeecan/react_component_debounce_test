import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Route, Switch } from 'react-router';
import { createHashHistory } from 'history';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import { Col, Row } from 'antd';

import * as reducers from '../reducers';

import FormUpdatePage from './form-update-page';
import FormUpdateOptimizedPage from './form-update-optimized-page';
import Header from '../components/header';
import NavBar from '../containers/nav-bar';

const history = createHashHistory();

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(
    thunk,
    routerMiddleware(history),
  ),
);


const RouterComponent = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="content">
        <Header />
        <div className="page-wrapper">
          <Row className="app-body">
            <Col sm={4}>
              <NavBar />
            </Col>
            <Col sm={20}>
              <Switch>
                <Route path="/form-update-page" component={FormUpdatePage} />
                <Route path="/form-update-optimized-page" component={FormUpdateOptimizedPage} />
              </Switch>
            </Col>
          </Row>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default RouterComponent;
