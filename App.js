<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <h1>Hello!!!</h1>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JobListScreen from './Components/JobListScreen';
import JobDetailScreen from './Components/JobDetailScreen';
import AddJobScreen from './Components/AddJobScreen';
import EditJobScreen from './Components/EditJobScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="JobList">
        <Stack.Screen name="JobList" component={JobListScreen} />
        <Stack.Screen name="JobDetail" component={JobDetailScreen} />
        <Stack.Screen name="AddJob" component={AddJobScreen} />
        <Stack.Screen name="EditJob" component={EditJobScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;  // Add this export statement to export the App component
>>>>>>> origin/main
