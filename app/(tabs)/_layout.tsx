import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs screenOptions={({ route }) => ({
            sceneStyle: styles.tabScene,
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: styles.tabBarLabel,
            tabBarIconStyle: styles.tabBarIcon,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <View style={styles.iconWrapper}>
                    {focused && <View style={styles.activeBg} />}
                    <Text style={focused ? styles.activeText : styles.inactiveText}>
                        <Image
                            source={require('@/assets/icons/up-arrow.png')}
                            style={styles.tabBarIcon}
                        />
                    </Text>
                </View>
            ),
        })}>
            <Tabs.Screen name="index" options={{ title: 'Attend' }} />
            <Tabs.Screen name="create" options={{ title: 'Create' }} />
            <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
        </Tabs>
    );
}


const styles = StyleSheet.create({
    tabScene: {
        backgroundColor: '#F8F9FA',
        paddingLeft: 20,
        paddingRight: 20
    },
    tabBar: {
        position: 'relative',
        backgroundColor: '#007BFF',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14
    },
    tabBarLabel: {
        color: '#FFFFFF',
        fontFamily: 'Nunito_700Bold'
    },
    tabBarIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    iconWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    activeBg: {
        position: 'absolute',
        width: 114,
        height: 114,
        backgroundColor: '#007BFF',
        borderRadius: 999,
        top: -25,
        zIndex: -1,
    },
    activeText: {
        color: '#007aff',
        fontWeight: 'bold',
    },
    inactiveText: {
        color: '#8e8e93',
    },
});