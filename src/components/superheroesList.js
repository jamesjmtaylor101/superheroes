import React from 'react';
import {FlatList} from 'react-native';
import {SearchBar} from './searchBar';
import {SuperheroCard} from './superheroCard';

export const SuperheroesList = ({data, onPressSuperhero, handleSearch}) => {
  const renderSuperheroesListItem = ({item}) => (
    <SuperheroCard {...item} onPressSuperhero={() => onPressSuperhero(item)} />
  );
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <FlatList
        renderItem={renderSuperheroesListItem}
        data={data}
        keyboardDismissMode={'on-drag'}
      />
    </>
  );
};
