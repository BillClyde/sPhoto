import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createSagaMiddleware } from 'redux-saga';

export default function configureStore(history, initialState) {
  const reducers = {
  };
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [
    sagaMiddleware
  ];

  const enhancers = []

  const rootReducer = combineReducers({
    ...reducers
  });
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );

  sagaMiddleware.run(rootSaga);
  
  return store;
}
