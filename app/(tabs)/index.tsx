import { View, Text, StyleSheet, Image } from 'react-native';
import { theme } from '../constants/theme';

const Attend = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerBanner}>
          <Image style={styles.appLogo} source={require('@/assets/logo.png')} />
          <Text style={styles.appTitle}>ETKI</Text>
          <Text style={styles.appMotto}>Unite Through Events</Text>
        </View>
      </View>

      <View style={styles.quickFilter} className='justify-center'>

        <View style={styles.searchFilter}>
          <Image style={styles.appLogo} source={require('@/assets/icons/search.png')} />
          <Text className="text-sm text-white font-nunitoBold font-bold">Search</Text>
        </View>

      </View>

    </View>
  );
}
export default Attend;

const styles = StyleSheet.create({
  container: {
  },
  header: {
    height: 118,
    marginBottom: 10,
    backgroundColor: '#cccccc',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  headerBanner: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  appLogo: {
    marginRight: 8
  },
  appTitle: {
    flex: 1,
    fontSize: 32,
    fontFamily: 'Nunito_700Bold',
    letterSpacing: 4
  },
  appMotto: {
    fontSize: 15,
    fontFamily: 'Nunito_500Medium_Italic'
  },

  quickFilter: {
    backgroundColor: theme.colors.primary,
    height: 40,
    borderRadius: 10,
  },
  searchFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.colors.white
  }
});
