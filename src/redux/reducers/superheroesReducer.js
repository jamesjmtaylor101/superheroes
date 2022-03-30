import {
  GET_DC_SUPERHEROES_REQUEST,
  GET_DC_SUPERHEROES_REQUEST_FAILED,
  GET_DC_SUPERHEROES_REQUEST_SUCCESS,
} from '../actions/types';

const initialState = {
  superheroes: [],
  loadingSuperheroes: false,
};

export const superheroesReducer = (state = initialState, action) => {
  const {type} = action;

  switch (type) {
    case GET_DC_SUPERHEROES_REQUEST: {
      return {
        ...state,
        loadingSuperheroes: true,
      };
    }

    case GET_DC_SUPERHEROES_REQUEST_SUCCESS: {
      const {payload: superheroesListFromBackend} = action;
      return {
        ...state,
        superheroes: superheroesListFromBackend,
        loadingSuperheroes: false,
      };
    }

    case GET_DC_SUPERHEROES_REQUEST_FAILED: {
      return {
        ...state,
        loadingSuperheroes: false,
      };
    }
    default:
      return state;
  }
};
