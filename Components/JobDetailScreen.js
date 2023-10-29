import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const JobDetailScreen = ({ selectedJob }) => {
  if (!selectedJob) {
    // Handle the case when there's no selected job (optional)
    return (
      <View>
        <Text>No job details to display.</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Job Details</Text>
      <Text>Title: {selectedJob.title}</Text>
      <Text>Description: {selectedJob.description}</Text>
      <Text>Salary: {selectedJob.salary}</Text>
      <Text>Company: {selectedJob.company}</Text>
      <Text>Posted At: {selectedJob.postedAt}</Text>
      {/* Display other job details as needed */}
    </View>
  );
};

const mapStateToProps = (state) => ({
  selectedJob: state.jobs.selectedJob,
});

export default connect(mapStateToProps)(JobDetailScreen);
