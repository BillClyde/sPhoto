import { all, fork } from 'redux-saga/effects';

/**
 * rootSaga
 */
export default function* root(){
  yield all([
    fork(/* TODO: write a saga*/),
    fork(/* TODO: write another saga*/)
  ]);
}
