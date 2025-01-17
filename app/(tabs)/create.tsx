import { View, Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NuText from '../components/NuText';
import { CreateIcon } from '../components/Vectors';
import { ScrollView } from 'react-native-gesture-handler';

const Create = () => {
  return (
    <SafeAreaView edges={['top']}>
      <ScrollView className='mx-5'>
        <View className='flex-row gap-x-2 mt-8 mb-8'>
          <NuText variant='extraBold' className='text-4xl'>Create an Event</NuText>
          <View><CreateIcon width={26} height={26} strokeColor='#000000' viewBox='0 0 22 22' /></View>
        </View>
        <View className='gap-y-4'>
          <View>
            <NuText variant='bold' className='text-2xl ml-2 mb-1'>Title</NuText>
            <TextInput className='bg-primary text-white rounded-xl px-4 pb-1.5 h-12 text-xl' />
          </View>
          <View>
            <NuText variant='bold' className='text-2xl ml-2 mb-1'>Description</NuText>
            <TextInput className='bg-primary text-white rounded-xl px-4 pb-1.5 min-h-24 text-xl'
              multiline={true}
              numberOfLines={10}
            />
          </View>
          <View>
            <NuText variant='bold' className='text-2xl ml-2 mb-1'>Type</NuText>
            <TextInput className='bg-secondary text-white rounded-xl px-4 pb-1.5 h-12 text-xl' />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Create;