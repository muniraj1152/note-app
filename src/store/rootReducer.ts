import { combineReducers } from 'redux';

import notesReducer from './notes/reducer';

const rootReducer = combineReducers({
  note: notesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
