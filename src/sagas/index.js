import { all, takeLatest, call, put } from 'redux-saga/effects'

import {IMPORT_FILES, PREVIEW_FILES, SELECT_FILE} from '../store/Import'

export function helloSaga(){
  console.log('Hello Sagas!')
}

export function* watchNavigation(){
  yield takeLatest('NAVIGATION', navigation)
}

export function* watchImportFiles(){
  yield takeLatest(IMPORT_FILES, () => console.log('Import Files called'))
}

export function* watchPreviewFiles(){
  yield takeLatest(PREVIEW_FILES, () => console.log('Preview Files called'))
}

export function* watchSelectFile(){
  yield takeLatest(SELECT_FILE, (file) => console.log('Select File called'))
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
    watchNavigation(),
    watchImportFiles(),
    watchPreviewFiles(),
    watchSelectFile()
  ]);
}
