// actions/jobActions.js
import axios from 'axios';

// Existing action types
export const SET_JOB_LIST = 'SET_JOB_LIST';
export const SELECT_JOB = 'SELECT_JOB';

// New action types
export const ADD_JOB = 'ADD_JOB';
export const EDIT_JOB = 'EDIT_JOB';

// Action creators for adding and editing jobs
export const addJob = (job) => async (dispatch) => {
  try {
    const response = await axios.post('/api/jobs', job);
    dispatch({ type: ADD_JOB, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const editJob = (job) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/jobs/${job.id}`, job);
    dispatch({ type: EDIT_JOB, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
