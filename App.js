import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Main from './components/MainComponent'
import Detail from './components/Detail'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
    < SafeAreaView style={styles.container}>
      {/* <Login /> */}
      {/* <Main/> */}
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen name="login" component={Login} options={{ title: 'Overview' }} />
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>

    </ SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 50,
    justifyContent: 'center',
  },
});
