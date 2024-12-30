import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import { ActiveTab, CreateIcon, ProfileIcon, UpArrowIcon } from '../components/Vectors';
import NuText from '../components/NuText';

export default function TabLayout() {
    return (
        <Tabs screenOptions={({ route }) => ({
            sceneStyle: styles.tabScene,
            tabBarStyle: styles.tabBar,
            headerShown: false
        })}>
            <Tabs.Screen name="index" options={{
                title: 'ATTEND',
                tabBarLabel: ({ focused }) =>
                    <View className={focused ? '-mt-2' : ''}>
                        <NuText variant='extraBold' className='text-base text-white tracking-wider'>ATTEND</NuText>
                    </View>,
                tabBarIcon: ({ focused }) =>
                    <View className='relative justify-center items-center'>
                        {
                            focused &&
                            <View className='absolute -bottom-14 -mb-2.5'>
                                <ActiveTab width={138} height={114} />
                            </View>
                        }
                        <View className={focused ? '-mt-4' : ''}>
                            <UpArrowIcon width={36} height={36} />
                        </View>
                    </View>,
            }} />
            <Tabs.Screen name="create" options={{
                title: 'CREATE',
                tabBarLabel: ({ focused }) =>
                    <View className={focused ? '-mt-2' : ''}>
                        <NuText variant='extraBold' className='text-base text-white tracking-wider'>CREATE</NuText>
                    </View>,
                tabBarIcon: ({ focused }) =>
                    <View className='relative justify-center items-center'>
                        {
                            focused &&
                            <View className='absolute -bottom-14 -mb-4'>
                                <ActiveTab width={138} height={114} />
                            </View>
                        }
                        <View className={focused ? '-mt-4' : ''}>
                            <CreateIcon width={26} height={26} viewBox='0 0 24 24' />
                        </View>
                    </View>
            }} />
            <Tabs.Screen name="profile" options={{
                title: 'PROFILE',
                tabBarLabel: ({ focused }) =>
                    <View className={focused ? '-mt-2' : ''}>
                        <NuText variant='extraBold' className='text-base text-white tracking-wider'>PROFILE</NuText>
                    </View>,
                tabBarIcon: ({ focused }) =>
                    <View className='relative justify-center items-center'>
                        {
                            focused &&
                            <View className='absolute -bottom-14 -mb-4'>
                                <ActiveTab width={138} height={114} />
                            </View>
                        }
                        <View className={focused ? '-mt-4' : ''}>
                            <ProfileIcon width={24} height={24} />
                        </View>
                    </View>
            }} />
        </Tabs>
    );
}


const styles = StyleSheet.create({
    tabScene: {
        backgroundColor: COLORS.whitish,
    },
    tabBar: {
        position: 'relative',
        backgroundColor: COLORS.primary,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    }
});