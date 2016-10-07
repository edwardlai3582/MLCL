import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import TopLevel from './components/TopLevel'
import CheckList from './containers/CheckList'
import WantList from './containers/WantList'
import HomePage from './containers/HomePage'
import reducer from './reducers'

import { persistStore, autoRehydrate } from 'redux-persist'

//const store = createStore(reducer)
const store = compose(autoRehydrate())(createStore)(reducer)
persistStore(store)

render(
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={TopLevel}>
          <IndexRoute component={HomePage}/>
          <Route path="checkList" component={CheckList}/>
          <Route path="wantList" component={WantList}/>    
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
)
