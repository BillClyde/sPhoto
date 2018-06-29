import { all, takeLatest, call, put } from 'redux-saga/effects'

export function helloSaga(){
  console.log('Hello Sagas!')
}

export function* watchNavigation(){
  yield takeLatest('NAVIGATION', navigation)
}

export function navigation(){
  console.log('navigation occured')
}

/**
 * rootSaga
 */
export default function* root(){
  yield all([
    helloSaga(),
    watchNavigation()
  ]);
}
