// redux/jobActions.js
import axios from 'axios';

export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOB_SUCCESS = 'FETCH_JOB_SUCCESS';
export const ADD_JOB_SUCCESS = 'ADD_JOB_SUCCESS';
export const EDIT_JOB_SUCCESS = 'EDIT_JOB_SUCCESS';
export const ERROR = 'ERROR';

export const fetchJobs = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/jobs');
      dispatch({ type: FETCH_JOBS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};

export const fetchJob = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/jobs/${id}`);
      dispatch({ type: FETCH_JOB_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};

export const addJob = (jobData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/jobs', jobData);
      dispatch({ type: ADD_JOB_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};

export const editJob = (id, jobData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/jobs/${id}`, jobData);
      dispatch({ type: EDIT_JOB_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};

// redux/jobReducers.js
import {
    FETCH_JOBS_SUCCESS,
    FETCH_JOB_SUCCESS,
    ADD_JOB_SUCCESS,
    EDIT_JOB_SUCCESS,
    ERROR,
  } from './Redux/jobActions';
  
  const initialState = {
    jobs: [],
    job: null,
    error: null,
  };
  
  const jobReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_JOBS_SUCCESS:
        return { ...state, jobs: action.payload, error: null };
      case FETCH_JOB_SUCCESS:
        return { ...state, job: action.payload, error: null };
      case ADD_JOB_SUCCESS:
        return { ...state, error: null };
      case EDIT_JOB_SUCCESS:
        return { ...state, error: null };
      case ERROR:
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default jobReducer;
  
