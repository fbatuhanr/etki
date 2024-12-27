import { View, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import NuText from './NuText'

export interface EventTypeProps {
    id: string;
    title: string;
    cover: ImageSourcePropType;
}
const EventType:React.FC<EventTypeProps> = ({id, title, cover}) => {
    return (
        <View className='h-28 w-48 relative rounded-2xl overflow-hidden flex-row items-center mr-2'>
            <Image source={cover} className="h-full w-full object-cover" resizeMode="cover" />
            <View className='absolute top-0 left-0 right-0 bottom-0 bg-blackish opacity-50'></View>
            <NuText variant='bold' className='text-2xl text-white pt-1 absolute left-0 right-0 text-center leading-[1.1]'>{title}</NuText>
        </View>
    )
}

export default EventType