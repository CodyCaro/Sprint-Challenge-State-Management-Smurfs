import React, { useEffect } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { getSmurf, addSmurf } from "../actions";
import useForm from "react-hook-form";

const FormHolder = styled.div`
  margin: 35px 0;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  margin: 35px 15px;
  padding: 15px 25px;
  background: dodgerblue;
  border: none;
  border-radius: 10px;
  color: black;
  font-size: 1.25rem;
  ::placeholder {
    color: white;
  }
`;
const SubmitButton = styled.button`
  margin: 35px;
  padding: 15px 25px;
  background: dodgerblue;
  border-radius: 15px;
  border: 2px solid black;
  font-size: 1.25rem;
  color: white;
`;

const SmurfForm = ({ getSmurf, addSmurf, smurfs, isFetching, error }) => {
  useEffect(() => {
    getSmurf();
  }, []);

  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    addSmurf(values);
    getSmurf();
  };

  if (isFetching) {
    return <h3>Fetching smurfs!</h3>;
  }

  return (
    <FormHolder>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          placeholder="Smurfs Name"
          ref={register({
            required: "Required"
          })}
        />
        {errors.name && errors.name.message}

        <Input
          name="age"
          placeholder="Smurfs Age"
          ref={register({
            required: "Required"
          })}
        />
        {errors.age && errors.age.message}
        <Input
          name="height"
          placeholder="Smurfs Height"
          ref={register({
            required: "Required"
          })}
        />
        {errors.height && errors.height.message}

        <SubmitButton>Submit</SubmitButton>
      </Form>
    </FormHolder>
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
