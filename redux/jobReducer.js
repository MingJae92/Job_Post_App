// redux/jobReducers.js
import {
    FETCH_JOBS_SUCCESS,
    FETCH_JOB_SUCCESS,
    ADD_JOB_SUCCESS,
    EDIT_JOB_SUCCESS,
    ERROR,
  } from './jobActions';
  
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
  