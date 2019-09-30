import axios from "axios";

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const getSmurf = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err.data });
    });
};
export const addSmurf = smurfToAdd => dispatch => {
  dispatch({ type: FETCHING_SMURFS_START });
  axios
    .post("http://localhost:3333/smurfs", smurfToAdd)
    .then(() => {
      console.log(smurfToAdd);
      dispatch({ type: ADD_SMURF, payload: smurfToAdd });
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err.data });
    });
};
