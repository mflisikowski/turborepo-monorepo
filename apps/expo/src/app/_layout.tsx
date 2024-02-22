import { Stack } from 'expo-router'
import { useColorScheme } from 'nativewind'

import '../styles.css'

export default function RootLayout() {
  const { colorScheme } = useColorScheme()

  return (
    <>
      <Stack
        screenOptions={{
          // headerStyle: {
          //   backgroundColor: '#FFFFFF',
          // },
          contentStyle: {
            backgroundColor: colorScheme == 'dark' ? '#000000' : '#FFFFFF',
          },
        }}
      />
    </>
  )
}
