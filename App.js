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
