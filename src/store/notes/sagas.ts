import axios from 'axios';
import { SagaIterator } from 'redux-saga';
import { all, takeLatest, call } from 'redux-saga/effects';

import { FETCH_NOTES_REQUEST } from './actionTypes';

const getNotes = () => {
  return [];
};

/*
  Worker Saga: Fired on FETCh_NOTES_REQUEST action
*/
function* fetchNotesSaga(): SagaIterator {
  try {
    const response = yield call(getNotes);
    console.log(response);
  } catch (e: any) {
    console.log(e);
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_NOTES_REQUEST` action.
*/
function* notesSaga() {
  yield all([takeLatest(FETCH_NOTES_REQUEST, fetchNotesSaga)]);
}

export default notesSaga;
