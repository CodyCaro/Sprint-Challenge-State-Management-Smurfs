import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf, addSmurf } from "../actions";
import useForm from "react-hook-form";

const SmurfForm = ({ getSmurf, addSmurf, smurfs, isFetching, error }) => {
  useEffect(() => {
    // run action creator when the component mounts
    getSmurf();
  }, [getSmurf]);

  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
    addSmurf(values);
  };

  if (isFetching) {
    return <h3>Fetching smurfs!</h3>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          ref={register({
            required: "Required"
          })}
        />
        {errors.name && errors.name.message}

        <input
          name="age"
          ref={register({
            required: "Required"
          })}
        />
        {errors.age && errors.age.message}
        <input
          name="height"
          ref={register({
            required: "Required"
          })}
        />
        {errors.height && errors.height.message}

        <button type="submit">Submit</button>
      </form>
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
  { getSmurf, addSmurf }
)(SmurfForm);
