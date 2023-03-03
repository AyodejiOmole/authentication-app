import 'react-native-gesture-handler';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();
function ScreenA({navigation}) {

  const onPressHandler = () => {
    navigation.navigate("ScreenB");
  }

  return (
    <View>
      <Text>Screen A</Text>
      <Pressable
        onPress={onPressHandler}>
        <Text>
          Got to screen B
        </Text>
      </Pressable>
    </View>
  );
}

function ScreenB() {
  return (
    <View>
      <Text>Screen B</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="login" component={screenA}/> */}
          <Stack.Screen name="screenA" component={ScreenA}/>
            {/* <Login/> */}
            {/* <SignUp/> */}
          <Stack.Screen name="screenB" component={ScreenB}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    // <Login/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: "20px",
    paddingVertical: "10px",
  },
});
