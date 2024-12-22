import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Image, StyleSheet, View } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarStyle: styles.container,
            tabBarLabelStyle: styles.item,
            tabBarIconStyle: styles.icon
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Attend',
                    tabBarIcon: () => (
                        <Image
                            source={require('@/assets/icons/up-arrow.png')}
                            style={styles.icon}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    title: 'Create',
                    tabBarIcon: () => (
                        <Image
                            source={require('@/assets/icons/up-arrow.png')}
                            style={styles.icon}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: () => (
                        <Image
                            source={require('@/assets/icons/up-arrow.png')}
                            style={styles.icon}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#007BFF',
    },
    item: {
        color: '#FFFFFF',
        fontFamily: 'Nunito-Medium'
    },
    icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
});