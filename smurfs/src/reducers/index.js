import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADD_SMURF
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [
          ...state.smurfs,
          {
            name: action.payload.name,
            age: action.payload.age,
            height: action.payload.height
          }
        ]
      };
    default:
      return state;
  }
};
