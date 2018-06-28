import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import * as Import from './Import'
import * as Export from './Export'
import * as Share from './Share'
import * as Collection from './Collection'
import * as Profile from './Profile'
import * as App from './App'
import root from '../sagas'

export default function configureStore(initialState) {
  const reducers = {
    import: Import.reducer,
    export: Export.reducer,
    share: Share.reducer,
    collection: Collection.reducer,
    profile: Profile.reducer,
    app: App.reducer
  }
  
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [
    sagaMiddleware
  ]

  const enhancers = []

  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = combineReducers({
    ...reducers
  })
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  )

  sagaMiddleware.run(root)
  
  return store
}
