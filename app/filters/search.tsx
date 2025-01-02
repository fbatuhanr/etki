import React from 'react';
import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router';

const Search = () => {
    const { query  } = useLocalSearchParams();
  return (
    <View>
      <Text>Search for: {query}</Text>
    </View>
  )
}

export default Search