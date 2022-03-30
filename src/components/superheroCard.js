import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';

export const SuperheroCard = ({
  imgUrl,
  name,
  description,
  onPressSuperhero,
}) => {
  const renderInformation = () => (
    <>
      <Text style={styles.title}>{name}</Text>
      <Text numberOfLines={1}>{description}</Text>
    </>
  );
  return (
    <Pressable style={styles.card} onPress={onPressSuperhero}>
      <Image source={{uri: imgUrl}} style={styles.image} />
      {renderInformation()}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 12,
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    marginVertical: 8,
    fontWeight: '600',
    fontSize: 16,
  },
});
