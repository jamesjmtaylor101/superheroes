import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SuperheroesList} from '../components/superheroesList';
import {screens} from '../navigation/constants';
import {createActionToGetSuperheores} from '../redux/actions/actionCreators';

export const SuperheroesListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {superheroes} = useSelector(state => state.superheroes);
  const [superheroesList, setSuperheroesList] = React.useState(superheroes);
  const [searchString, changeSearchString] = React.useState(undefined);

  React.useEffect(() => {
    dispatch(createActionToGetSuperheores());
  }, []);

  React.useEffect(() => {
    if (searchString) {
      const updatedList = superheroes.filter(
        superhero =>
          superhero.name.toLowerCase().includes(searchString) ||
          superhero.description
            .toLowerCase()
            .includes(searchString.toLowerCase()),
      );
      setSuperheroesList(updatedList);
    }
  }, [searchString, superheroes]);

  const onPressSuperhero = superhero => {
    navigation.navigate(screens.superheroDetails.title, superhero);
  };

  const handleSearch = text => {
    if (text === '') {
      changeSearchString(undefined);
    } else {
      changeSearchString(text);
    }
  };

  return (
    <SuperheroesList
      data={superheroesList}
      onPressSuperhero={onPressSuperhero}
      handleSearch={handleSearch}
    />
  );
};
