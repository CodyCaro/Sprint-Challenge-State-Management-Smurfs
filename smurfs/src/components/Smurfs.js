import React, { useEffect } from "react";
import "./App.css";
import { getSmurf, addSmurf } from "../actions";

import { connect } from "react-redux";

const Smurfs = ({ getSmurf, smurfs, isFetching, error }) => {
  useEffect(() => {
    getSmurf();
  }, [getSmurf]);

  if (isFetching) {
    return <h3>Fetching smurfs!</h3>;
  }

  return (
    <div>
      {smurfs.map(smurf => {
        return (
          <div>
            <h2>{smurf.name}</h2>
            <h3>{smurf.age}</h3>
            <h3>{smurf.height}</h3>
          </div>
        );
      })}
    </div>
  );
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
)(Smurfs);
