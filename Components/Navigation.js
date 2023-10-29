// Navigation.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import JobListScreen from './JobListScreen';
import JobDetailScreen from './JobDetailScreen';
import AddJobScreen from './AddJobScreen';
import EditJobScreen from './EditJobScreen';

const AppNavigator = createStackNavigator({
  JobList: { screen: JobListScreen },
  JobDetail: { screen: JobDetailScreen },
  AddJob: { screen: AddJobScreen },
  EditJob: { screen: EditJobScreen },
});

export default createAppContainer(AppNavigator);
