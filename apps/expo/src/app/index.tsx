import { Platform, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function Index() {
  return (
    <SafeAreaView edges={[]}>
      <StatusBar style={Platform.OS === 'ios' ? 'dark' : 'light'} />
      <Stack.Screen options={{ headerShown: false, title: '' }} />

      <View className="flex h-screen justify-center">
        <Text className="pb-2 text-center text-5xl font-bold text-white">
          Welcome to the Expo App!
        </Text>
      </View>
    </SafeAreaView>
  )
}
