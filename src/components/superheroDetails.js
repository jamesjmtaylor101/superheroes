import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';

export const SuperheroDetails = ({imgUrl, name, description, alterEgo}) => {
  const renderInformation = () => (
    <>
      <Text style={styles.title}>{name}</Text>
      <Text>{description}</Text>
    </>
  );
  return (
    <View style={styles.card}>
      <Text style={styles.alterEgo}>{alterEgo}</Text>
      <Image source={{uri: imgUrl}} style={styles.image} />
      {renderInformation()}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 12,
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    marginVertical: 8,
    fontWeight: '600',
    fontSize: 16,
  },
  alterEgo: {
    marginBottom: 12,
    fontWeight: '700',
    fontSize: 18,
  },
});
