import api from './api';
import {endpoints} from './endpoints';

export const getSuperheroesRequest = async () => {
  return api().request({
    method: 'get',
    url: endpoints.superheroes,
  });
};
