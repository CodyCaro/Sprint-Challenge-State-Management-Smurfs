import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions";

const SmurfForm = ({ getSmurf, smurfs, isFetching, error }) => {
  useEffect(() => {
    // run action creator when the component mounts
    getSmurf();
  }, [getSmurf]);

  console.log(smurfs);

  if (isFetching) {
    return <h3>Fetching quote for ya!</h3>;
  }

  return <div></div>;
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurf }
)(SmurfForm);
