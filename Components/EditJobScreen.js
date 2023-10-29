// screens/EditJobScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { editJob } from '../redux/jobActions';


const EditJobScreen = ({ route, navigation, editJob }) => {
  const { job } = route.params;
  const [editedJob, setEditedJob] = useState(job);

  const handleEditJob = () => {
    // Dispatch an action to edit the job
    editJob(editedJob);
    navigation.navigate('JobList');
  };

  return (
    <View>
      <Text>Edit Job Posting</Text>
      <TextInput
        placeholder="Title"
        value={editedJob.title}
        onChangeText={(text) => setEditedJob({ ...editedJob, title: text })}
      />
      {/* Add input fields for description, salary, company, and postedAt */}
      <Button title="Save Changes" onPress={handleEditJob} />
    </View>
  );
};

export default connect(null, { editJob })(EditJobScreen);
