// screens/AddJobScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addJob } from '../redux/jobActions';


const AddJobScreen = ({ navigation, addJob }) => {
  const [job, setJob] = useState({
    title: '',
    description: '',
    salary: '',
    company: '',
    postedAt: '',
  });

  const handleAddJob = () => {
    // Dispatch an action to add the new job
    addJob(job);
    navigation.navigate('JobList');
  };

  return (
    <View>
      <Text>Add a New Job Posting</Text>
      <TextInput
        placeholder="Title"
        value={job.title}
        onChangeText={(text) => setJob({ ...job, title: text })}
      />
      {/* Add input fields for description, salary, company, and postedAt */}
      <Button title="Add Job" onPress={handleAddJob} />
    </View>
  );
};

export default connect(null, { addJob })(AddJobScreen);
