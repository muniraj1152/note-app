import { all, fork } from 'redux-saga/effects';

import notesSaga from './notes/sagas';

export function* rootSaga() {
  yield all([fork(notesSaga)]);
}
