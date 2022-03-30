import React from 'react';
import {SuperheroDetails} from '../components/superheroDetails';

export const SuperheroeDetailsScreen = ({route, navigation}) => {
  const {params: superhero} = route;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: superhero.name,
    });
  }, [navigation, superhero]);

  return <SuperheroDetails {...superhero} />;
};
