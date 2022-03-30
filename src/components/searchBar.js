import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

export const SearchBar = ({handleSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleSearch}
        status="info"
        placeholder="Search"
        style={styles.textInput}
        textStyle={styles.text}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  textInput: {
    borderRadius: 25,
    borderColor: '#333',
    backgroundColor: '#fff',
  },
  text: {color: '#000'},
  container: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 8,
  },
});
