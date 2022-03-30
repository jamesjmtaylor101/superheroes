import {GET_DC_SUPERHEROES_REQUEST} from './types';

export const createActionToGetSuperheores = (payload = {}) => ({
  type: GET_DC_SUPERHEROES_REQUEST,
  payload: payload,
});
