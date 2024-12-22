import { View, Text, StyleSheet, Image } from 'react-native';

const Attend = () => {
  return (
    <View style={styles.container}>
      <Text>Attend</Text>
      <Image
        source={require('@/assets/icons/up-arrow.png')}
      />
    </View>
  );
}
export default Attend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
