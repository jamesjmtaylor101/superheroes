import {combineReducers} from 'redux';

import {superheroesReducer} from './superheroesReducer';

const rootReducer = combineReducers({
  superheroes: superheroesReducer,
});

export default rootReducer;
