import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackIcon, FavIcon, ShareIcon } from '../components/Vectors';
import NuText from '../components/NuText';
import COLORS from '../constants/colors';
import { sampleEventTypes } from '../data/sample';

const Filters = () => {

    const [sortBy, setSortBy] = useState({
        isModalVisible: false,
        value: ''
    });

    const [type, setType] = useState({
        isModalVisible: false,
        value: ''
    });

    useEffect(() => {
        if (!sortBy.value) return;

        alert(`value changed: ${sortBy.value}`);
    }, [sortBy.value])

    return (
        <View className='flex-1 bg-whitish'>
            <ScrollView>
                <StatusBar style="dark" />
                <Stack.Screen
                    options={{
                        headerTransparent: true,
                        header: ({ navigation }) => (
                            <SafeAreaView className='flex-row ps-6 gap-x-4'>
                                <TouchableOpacity onPress={() => navigation.goBack()} className='flex-row items-center gap-x-4'>
                                    <BackIcon width={24} height={24} strokeColor={COLORS.primary} />
                                </TouchableOpacity>
                                <View className='flex-row gap-x-1 h-10'>
                                    <View className='relative'>
                                        <TouchableOpacity onPress={() => setSortBy((prev) => ({ ...prev, isModalVisible: !prev.isModalVisible }))} className='flex-row items-center gap-x-2 bg-primary rounded-xl px-4 h-full'>
                                            <NuText variant='bold' className='text-white text-xl'>{sortBy.value ? sortBy.value : 'Sort By'}</NuText>
                                            <View className='rotate-[-90deg]'><BackIcon width={16} height={16} viewBox='0 0 24 24' isFilled={sortBy.isModalVisible} /></View>
                                        </TouchableOpacity>
                                        {
                                            sortBy.isModalVisible &&
                                            <View className='absolute top-11 left-0 min-w-full gap-y-0.5'>
                                                <TouchableOpacity onPress={() => setSortBy({ value: 'Featured', isModalVisible: false })} className='bg-primary rounded px-2 py-2'>
                                                    <NuText variant='semiBold' className='text-white'>Featured</NuText>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => setSortBy({ value: 'Newest', isModalVisible: false })} className='bg-primary rounded px-2 py-2'>
                                                    <NuText variant='semiBold' className='text-white'>Newest</NuText>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={() => setSortBy({ value: 'Most Popular', isModalVisible: false })} className='bg-primary rounded px-2 py-2'>
                                                    <NuText variant='semiBold' className='text-white'>Most Popular</NuText>
                                                </TouchableOpacity>
                                            </View>
                                        }
                                    </View>
                                    <View className='relative'>
                                        <TouchableOpacity onPress={() => setType((prev) => ({ ...prev, isModalVisible: !prev.isModalVisible }))} className='flex-row items-center gap-x-2 bg-primary rounded-xl px-4 h-full'>
                                            <NuText variant='bold' className='text-white text-xl'>{type.value ? type.value : 'Type'}</NuText>
                                            <View className='rotate-[-90deg]'><BackIcon width={16} height={16} viewBox='0 0 24 24' isFilled={sortBy.isModalVisible} /></View>
                                        </TouchableOpacity>
                                        {
                                            type.isModalVisible &&
                                            <View className='absolute top-11 left-0 gap-y-0.5'>
                                                {
                                                    sampleEventTypes.map(eType =>
                                                        <TouchableOpacity onPress={() => setType({ value: eType.title, isModalVisible: false })} className='bg-primary rounded px-2 py-2'>
                                                            <NuText variant='semiBold' className='text-white'>{eType.title}</NuText>
                                                        </TouchableOpacity>
                                                    )
                                                }
                                            </View>
                                        }
                                    </View>
                                </View>
                            </SafeAreaView>
                        )
                    }}
                />
            </ScrollView>
        </View>
    );
};

export default Filters;
