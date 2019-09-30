import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf, addSmurf } from "../actions";

const SmurfForm = ({ getSmurf, addSmurf, smurfs, isFetching, error }) => {
  useEffect(() => {
    // run action creator when the component mounts
    getSmurf();
    addSmurf({ name: "Working", age: 5, height: "5cm" });
  }, [getSmurf]);

  console.log(smurfs);

  if (isFetching) {
    return <h3>Fetching smurfs!</h3>;
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
  { getSmurf, addSmurf }
)(SmurfForm);
