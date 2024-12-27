import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../constants/colors';
import EventCard from '../components/EventCard';
import NuText from '../components/NuText';
import NuLink from '../components/NuLink';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sampleEvents, sampleEventTypes } from '../data/sample';
import EventType from '../components/EventType';
import FONTS from '../constants/fonts';
import { LogoMultipleRing, SearchIcon, CalendarIcon } from '../components/Vectors';

const Attend = () => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    console.log(currentDate)
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setMode('date');
    setShow(true);
  };

  const showTimepicker = () => {
    setMode('time');
    setShow(true);
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerClassName='pl-5 pb-5' showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

        <View className='mt-2.5 mb-2.5 mr-5 flex-row items-center'>
          <LogoMultipleRing width={38} height={38} />
          <NuText variant='bold' className='flex-1 text-3xl tracking-[4] ml-2.5 mt-1.5'>ETKI</NuText>
          <NuText variant='mediumItalic' className='text-base'>Unite Through Events</NuText>
        </View>

        <View className='h-11 pr-5 flex-row gap-x-0.5'>
          <View className='flex-1 flex-row items-center gap-x-2 bg-primary px-4 rounded-tl-[10px] rounded-bl-[10px]'>
            <SearchIcon width={22} height={22} />
            <NuText variant='bold' className='text-base text-white'>Search</NuText>
          </View>
          <View className='flex-1 flex-row items-center gap-x-2 bg-primary px-4 rounded-tr-[10px] rounded-br-[10px]'>
            <CalendarIcon width={22} height={22} />
            <NuText variant='bold' className='text-base text-white'>Search</NuText>
          </View>
        </View>

        <View>
          <View className='mt-8'>
            <View className='mb-2 mr-6 flex-row justify-between'>
              <NuText variant='extraBold' className='text-4xl'>Event Types</NuText>
              <NuLink href='/' variant='regular' className='text-2xl text-grayish'>All</NuLink>
            </View>
            <FlatList
              data={sampleEventTypes}
              renderItem={({ item }) => <EventType {...item} />}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View className='mt-8'>
            <View className='mb-2 mr-6 flex-row justify-between'>
              <NuText variant='extraBold' className='text-4xl'>Featured Events</NuText>
              <NuLink href='/' variant='regular' className='text-2xl text-grayish'>All</NuLink>
            </View>
            <FlatList
              data={sampleEvents}
              renderItem={({ item }) => <EventCard {...item} />}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              className='pt-1 pl-2 -ml-2 pb-3'
            />
          </View>
          <View className='mt-8'>
            <View className='mb-2 mr-6 flex-row justify-between'>
              <NuText variant='extraBold' className='text-4xl'>Newest Events</NuText>
              <NuLink href='/' variant='regular' className='text-2xl text-grayish'>All</NuLink>
            </View>
            <FlatList
              data={sampleEvents}
              renderItem={({ item }) => <EventCard {...item} />}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              className='pt-1 pl-2 -ml-2 pb-3 pr-4'
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Attend;


{/* <SafeAreaView>
        <Button onPress={showDatepicker} title="Show date picker!" />
        <Button onPress={showTimepicker} title="Show time picker!" />
        <Text>selected: {date.toLocaleString()}</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </SafeAreaView> */}