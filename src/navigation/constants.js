import {SuperheroeDetailsScreen} from '../screens/superheroDetailsScreen';
import {SuperheroesListScreen} from '../screens/superheroesListScreen';

export const screens = {
  superheroesList: {
    title: 'DC Superheroes',
    component: SuperheroesListScreen,
  },
  superheroDetails: {
    title: 'Superhero', // title will be dynamic based on selected super hero
    component: SuperheroeDetailsScreen,
  },
};
