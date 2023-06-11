import { Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";


const Layout = () => {
  return (
   <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false}}  />
   </Stack> 
  )
}

export default Layout

