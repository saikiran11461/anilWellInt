import { Redirect, router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function Index() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return null;

  return <Redirect  href="/(auth)/welcome"/>
  // (
  //   <View className="mt-40">
  //     <TouchableOpacity onPress={()=>router.replace("/(auth)/welcome")}><Text className="text-red-600">welcome</Text></TouchableOpacity>
  //     {/* <Text className="text-red-600">hello</Text> */}
  //   </View>
  // )
}
